import {Router, Link, useLocation, useNavigate} from "react-router-dom";
import styles from './index.module.less'
import {routes} from '../../routes'
import {useState} from "react";
import {unmountComponentAtNode} from "react-dom";
import {Menu, Button} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
export const SideBar = () => {
  var links = [...routes]
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location)
  const pathArr = location.pathname.split('/').filter(item => item !== '')
  if (pathArr.length == 1) {
    pathArr[0] = '/' + pathArr[0]
  }
  if (pathArr.length == 0) {
    pathArr[0] = '/'
  }
  // 默认选中
  var selectK = []
  // 默认展开
  var openK = []
  // 所有可展开key
  const okeys = []
  links.map((item) => {
    if(item.children){
      okeys.push(item.path)
    }
    if (item.path === pathArr[pathArr.length - 1]) {
      selectK[0] = item.path
    } else {
      if (item.children) {
        item.children.map(itemA => {
          if (itemA.path == pathArr[1]) {
            if (itemA.children) {
              itemA.children.map(itemB => {
                if (itemB.path === pathArr[2]) {
                  selectK = [item.path + '/' + itemA.path + '/' + itemB.path]
                  openK = [item.path, item.path + '/' + itemA.path]
                }
              })
            } else {
              selectK = [item.path + '/' + itemA.path]
              openK = [item.path]
            }
          }
        })
      }
    }
  })
  console.log(pathArr)
  const [select, setSelect] = useState(selectK)
  const [openKeys, setOpenKeys] = useState(okeys);
  const [open, setOpen] = useState(openK)
  // 渲染sidebar
  const linkList = links.map(item => {
    if (item.children) {
      return (
        <SubMenu key={item.path} title={item.name}>
          {item.children.map(itemA => {
            if (itemA.children) {
              const menuItem3 = itemA.children.map(itemB => (
                <Menu.Item key={item.path + '/' + itemA.path + '/' + itemB.path}>{itemB.name}</Menu.Item>
              ))
              return (
                <SubMenu key={item.path + '/' + itemA.path} title={itemA.name}>
                  {menuItem3}
                </SubMenu>
              )
            } else {
              return (<Menu.Item key={item.path + '/' + itemA.path}>
                {itemA.name}
              </Menu.Item>)
            }
          })}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.path}>
          {item.name}
        </Menu.Item>
      )
    }
  })
// 路由跳转
  function changeRouter(item) {
    if (item) {
      navigate(item.key)
    }
  }
  // 修改展开关闭
  function onOpenChange(keys) {
    const latestOpenKey = keys.find(key => open.indexOf(key) === -1);
    if (okeys.indexOf(latestOpenKey) === -1) {
      setOpen(keys);
    } else {
      setOpen(latestOpenKey ? [latestOpenKey] : []);
    }

  }

  return (
    <div className={styles.sideBar}>
      <div className={styles.logo}>React Demo</div>
        <Menu mode="inline"
              theme="dark" onSelect={(item) => changeRouter(item)} openKeys={open} onOpenChange={onOpenChange}
              defaultSelectedKeys={select}>
          {linkList}
        </Menu>
    </div>
  )
}
