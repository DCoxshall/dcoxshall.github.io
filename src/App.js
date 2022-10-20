import React, {useEffect} from "react";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

class App extends React.Component {
	render() {
		return (
			<div id="appContainer">
				<Sidebar></Sidebar>
				<MainContent></MainContent>
			</div>
		);
	}
}

export default App;
