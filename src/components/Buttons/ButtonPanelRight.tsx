import BigButton from "./BigButton";

import { CSSProperties } from "react";

const wrapperStyle: CSSProperties = {
	position: "absolute",
	right: 20,
	top: 120,
	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
};

const ButtonPanelRight = () => {
	return (
		<div style={wrapperStyle}>
			<h1>Presets</h1>
			<BigButton
				label="Start Webcam"
				onClick={() => {
					// Logic to start webcam
					console.log("Webcam started");
				}}
			/>
			<BigButton
				label="Capture Image"
				onClick={() => {
					// Logic to capture image
					console.log("Image captured");
				}}
			/>
			<BigButton
				label="Reset"
				onClick={() => {
					// Logic to reset state
					console.log("State reset");
				}}
			/>
		</div>
	);
};

export default ButtonPanelRight;
