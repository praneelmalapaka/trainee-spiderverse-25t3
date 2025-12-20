import { Link } from "react-router-dom";
import home from "../../src/assets/home.png";
import search from "../../src/assets/search.png";
import upload from "../../src/assets/upload.png";
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="home">
                <Link to='/' className="sidebar-item">
                    <img src={home} alt="home" ></img>
                </Link>
            </div>
            <div className="search">
                <Link to='/search' className="sidebar-item">
                    <img src={search} alt="search" ></img>
                </Link>
            </div>
            <div className="upload">
                <Link to='/upload' className="sidebar-item">
                    <img src={upload} alt="upload" ></img>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar;