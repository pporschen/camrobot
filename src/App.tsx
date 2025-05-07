import React from "react";
import WebcamCapture from "./components/WebcamCapture";
import ButtonPanelRight from "./components/Buttons/ButtonPanelRight";

function App() {
	return (
		<div
			className="App"
			style={{
				width: "100vw",
				height: "100vh",
				overflow: "hidden", // Prevents scrollbars
			}}
		>
			<WebcamCapture />
			<ButtonPanelRight />
		</div>
	);
}

export default App;
