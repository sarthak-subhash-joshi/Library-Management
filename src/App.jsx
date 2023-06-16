import { Footer, SideBar } from "./Components";
import { Books, Home, Students } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<div className="grid main-div">
				<SideBar />
				<Routes>
					<Route index element={<Home />} />
					<Route path="students" element={<Students />} />
					<Route path="books" element={<Books />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
