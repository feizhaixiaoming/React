
import {Header} from "./header";
import {SideBar} from "./sideBar";
import {AppMain} from './AppMain'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
export const Layout = ()=>{
  return (
    <Router>
      <SideBar></SideBar>
      <Header></Header>
      <AppMain></AppMain>
    </Router>
  )
}
