import {
  Facebook,
  Instagram,
  Pinterest,
  Search,
  Twitter,
} from "@mui/icons-material";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <Facebook className="topIcon" />
        <Instagram className="topIcon" />
        <Pinterest className="topIcon" />
        <Twitter className="topIcon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <ul className="topListItem">HOME</ul>
          <ul className="topListItem">ABOUT</ul>
          <ul className="topListItem">CONTACT</ul>
          <ul className="topListItem">WRITE</ul>
          <ul className="topListItem">LOGOUT</ul>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://images.pexels.com/users/avatars/44735047/vinay-sehwag-329.jpeg?auto=compress&fit=crop&h=256&w=256"
          alt="Ownerimage"
        />
        <Search className="searchIcon" />
      </div>
    </div>
  );
};

export default TopBar;
