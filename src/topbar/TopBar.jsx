import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <Facebook />
        <Instagram />
        <Pinterest />
        <Twitter />
      </div>
      <div className="topCenter">center</div>
      <div className="topRight">right</div>
    </div>
  );
};

export default TopBar;
