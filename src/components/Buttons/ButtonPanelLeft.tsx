import BigButton from "./BigButton";

import { CSSProperties } from "react";

const wrapperStyle: CSSProperties = {
	position: "absolute",
	left: 20,
	top: 120,
	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
	zIndex: 1000, // Ensure it is on top of other elements
};

const ButtonPanelLeft = () => {
	return (
		<div style={wrapperStyle}>
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

export default ButtonPanelLeft;
