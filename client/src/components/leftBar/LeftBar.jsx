import "./leftBar.scss";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import GroupsIcon from "@mui/icons-material/Groups";
import StoreIcon from "@mui/icons-material/Store";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import FolderIcon from "@mui/icons-material/Folder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CollectionsIcon from "@mui/icons-material/Collections";
import DuoIcon from "@mui/icons-material/Duo";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import HelpOutlineTwoToneIcon from "@mui/icons-material/HelpOutlineTwoTone";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          {/* <Link
            to={`/profile/${post.userId}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="user">
              <img src={currentUser.profilePic} alt="user's img" />
              <span>{currentUser.name}</span>
            </div>
          </Link> */}
          <div className="user">
            <img src={"/upload/" + currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <PermContactCalendarIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <GroupsIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <StoreIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <SmartDisplayIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <FolderIcon />
            <span>Memories</span>
          </div>

          <hr />

          <div className="menu">
            <span>Your shortcuts</span>
            <div className="item">
              <CalendarMonthIcon />
              <span>Events</span>
            </div>
            <div className="item">
              <SportsEsportsIcon />
              <span>Gaming</span>
            </div>
            <div className="item">
              <CollectionsIcon />
              <span>Gallery</span>
            </div>
            <div className="item">
              <DuoIcon />
              <span>Videos</span>
            </div>
            <div className="item">
              <MarkunreadIcon />
              <span>Messages</span>
            </div>
          </div>

          <hr />

          <div className="menu">
            <span>Others</span>
            <div className="item">
              <LocalAtmIcon />
              <span>Fundraiser</span>
            </div>
            <div className="item">
              <HelpOutlineTwoToneIcon />
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
