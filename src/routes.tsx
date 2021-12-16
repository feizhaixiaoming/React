import Home from "./pages/home";
import Table from "./pages/table";
import ReactPage from "./pages/react";
import VitePage from "./pages/react/vite";
import UmiPage from "./pages/react/umi";
import DVa from "./pages/react/Dva";
import JingDong from "./pages/goods/jingdong";
import TaoBao from "./pages/goods/taobao";
export const routes = [
  {
    path: '/',
    name: '首页',
    element: <Home/>,
    isAct: true,
  },
  {
    path: '/Table',
    name: '表格',
    element: <Table/>,
    isAct: false,
  },
  {
    path: '/goods',
    name: '商品',
    isAct: false,
    children: [
          {
            path: 'jingdong',
            name: '京东',
            element: <JingDong/>,
            isAct: false,
          },
          {
            path: 'taobao',
            name: '淘宝',
            element: <TaoBao/>,
            isAct: false,
          },
        ]

  },
  {
    path: '/list',
    name: '列表',
    isAct: false,
    children: [
      {
        path: 'react',
        name: 'react',
        isAct: false,
        children:[
          {
            path: 'umi',
            name: 'Umi',
            element: <UmiPage/>,
            isAct: false,
          },
          {
            path: 'Dva',
            name: 'Dva',
            element: <DVa/>,
            isAct: false,
          },
        ]
      },
      {
        path: 'vite',
        name: 'vite',
        element: <VitePage/>,
        isAct: false,
      }
    ]
  }
]
