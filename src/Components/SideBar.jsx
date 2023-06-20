import { NavLink } from "react-router-dom";
import { books, home, logo, student } from "../assets/Index";
import "./Sidebar.css";

const SideBar = () => {
	return (
		<div className="sidebar">
			<img src={logo} alt="main-logo" className="sidebar-logo" />
			<ul>
				<li>
					<NavLink to={"/"} className="nav-links">
						<img src={home} alt="menu-img" />
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to={"/students"} className="nav-links">
						<img src={student} alt="menu-img" />
						Students
					</NavLink>
				</li>
				<li>
					<NavLink to={"/books"} className="nav-links">
						<img src={books} alt="menu-img" />
						Books
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default SideBar;
