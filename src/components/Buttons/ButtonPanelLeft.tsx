import AxisControls from "./AxisControls";

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
			<h1>Controls</h1>

			<AxisControls
				axisName="X Axis"
				plusHandler={() => console.log("X Axis +")}
				minusHandler={() => console.log("X Axis -")}
			/>
			<AxisControls
				axisName="Y Axis"
				plusHandler={() => console.log("Y Axis +")}
				minusHandler={() => console.log("Y Axis -")}
			/>
			<AxisControls
				axisName="Z Axis"
				plusHandler={() => console.log("Z Axis +")}
				minusHandler={() => console.log("Z Axis -")}
			/>
		</div>
	);
};

export default ButtonPanelLeft;
