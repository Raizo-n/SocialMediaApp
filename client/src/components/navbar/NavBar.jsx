import "./navBar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

function NavBar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>CICCC APP</span>
        </Link>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <HomeOutlinedIcon className="home"/>
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon className="darkMode" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className="darkMode" onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className="user">
          <img src={"/upload/" + currentUser.profilePic} alt="user's img" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
