import Home from "../pages/home";
import Table from "../pages/table";
import {BrowserRouter as Router, BrowserRouterProps,useNavigate,useLocation,Routes, Route, Link} from "react-router-dom"
import styles from './index.module.less'
import {routes} from '../routes'
import {useState} from "react";
export const AppMain = () => {
  var links = [...routes]
  // 路由注册
  console.log(links)
  const routeList = links.map(item => {
    if(item.children){
      return (
        <Route path={item.path}  key={item.path}>
          {item.children.map(itemA=>{
            if(itemA.children){
              const route3 = itemA.children.map(itemB=>(
                <Route path={itemB.path} element={itemB.element} key={itemB.path} />
              ))
                return <Route path={itemA.path} key={itemA.path} >
                  {route3}
                </Route>
            }else{
              return <Route path={itemA.path} element={itemA.element} key={itemA.path}>{itemA.name}</Route>
            }
          })}
        </Route>
      )
    }else{
      return (
      <Route path={item.path} element={item.element} key={item.path}>{item.name}</Route>
      )
    }
  })
  const locaton = useLocation()
  return (
    <div className={styles.AppMain}>
      <Routes>
        {routeList}
      </Routes>
    </div>
  )
}
