import React from "react";

class Sidebar extends React.Component {
	render() {
		return (
			<div id="sidebarContainer">
				<div id="picContainer"></div>
				<p>Dylan Coxshall</p>
				<p>University of Birmingham</p>
				<p>BSc Computer Science with Year in Industry</p>
				<hr></hr>
				<p>07956 084982</p>
				<a href="mailto:dacoxshall@gmail.com">dacoxshall@gmail.com</a>
				<hr></hr>
				
				<p>Top 6% TryHackMe</p>
			</div>
		);
	}
}

export default Sidebar;
