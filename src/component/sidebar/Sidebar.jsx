import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/13394510/pexels-photo-13394510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="about me"
        />
        <p>
          I am a full stack web developer (MERN) stack , I also have interest in
          UI/UX design . I love to solve problems .
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">Sex</li>
          <li className="sidebarListItem">Coding</li>
          <li className="sidebarListItem">Cinema</li>
          <li className="sidebarListItem">Texh</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <Facebook className="sidebarIcon" />
          <Instagram className="sidebarIcon" />
          <Pinterest className="sidebarIcon" />
          <Twitter className="sidebarIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
