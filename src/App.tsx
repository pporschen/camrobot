import React from "react";
import WebcamCapture from "./components/WebcamCapture";
import ButtonPanelRight from "./components/Buttons/ButtonPanelRight";
import ButtonPanelLeft from "./components/Buttons/ButtonPanelLeft";
import ShowIpAddress from "./components/ShowIPAddress";

const appStyles = {
	width: "100vw",
	height: "100vh",
	overflow: "hidden", // Prevents scrollbars
};

function App() {
	return (
		<div className="App" style={appStyles}>
			<ButtonPanelLeft />
			<WebcamCapture />
			<ButtonPanelRight />
			<ShowIpAddress />
		</div>
	);
}

export default App;
