import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { NavLink } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className="top">
        <NavLink to='/' style={{ textDecoration: 'none' }}><span className="logo">ChikiAdmin</span></NavLink>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon  className="icon"/>
            <NavLink to='/' style={{ textDecoration: 'none' }}><span>Dashboard</span></NavLink>
          </li>
          <p className="title">LIST</p>
          <li>
            <PersonOutlineIcon  className="icon"/>
            <NavLink to='/users' style={{ textDecoration: 'none' }}><span>Users</span></NavLink>
          </li>
          <li>
            <LocalShippingIcon  className="icon"/>
            <NavLink to='/products' style={{ textDecoration: 'none' }}><span>Products</span></NavLink>
          </li>
          <li>
            <CreditCardIcon  className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <StoreIcon  className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon  className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <SettingsApplicationsIcon  className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <ExitToAppIcon  className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <NotificationsNoneIcon  className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon  className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <PsychologyOutlinedIcon  className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon  className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={()=> dispatch({type:'LIGHT'})}></div>
        <div className="colorOption" onClick={()=> dispatch({type:'DARK'})}></div>
      </div>
    </div>
  )
}

export default Sidebar