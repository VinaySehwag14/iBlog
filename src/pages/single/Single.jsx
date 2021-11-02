import Post from "../../component/post/Post";
import Sidebar from "../../component/sidebar/Sidebar";
import SinglePost from "../../component/singlePost/SinglePost";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;