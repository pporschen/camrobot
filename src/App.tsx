import React from "react";
import WebcamCapture from "./components/WebcamCapture";

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
		</div>
	);
}

export default App;
