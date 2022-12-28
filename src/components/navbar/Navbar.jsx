import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {

  const {dispatch, darkMode} = useContext(DarkModeContext);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
          
            <SearchOutlinedIcon />
          
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            <span>English</span>
          </div>
          <div className="item">
            {darkMode? <LightModeOutlinedIcon className='icon' 
            onClick={()=> dispatch({type:'TOGGLE'})}/> :<DarkModeOutlinedIcon className="icon" 
            onClick={()=> dispatch({type:'TOGGLE'})}/>}
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="counter">4</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>
          </div>
          <div className="item">
           <img src="https://images.pexels.com/photos/306864/pexels-photo-306864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile image" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar