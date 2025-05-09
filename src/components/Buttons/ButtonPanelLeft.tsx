import AxisControls from "./AxisControls";

import { CSSProperties } from "react";
import armUtils from "../../utils/moveArm";

const { AXIS, CMD, moveAxis } = armUtils;
const wrapperStyle: CSSProperties = {
	position: "absolute",
	left: 20,
	top: 120,
	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
	zIndex: 1000,
};

const ButtonPanelLeft = () => {
	return (
		<div style={wrapperStyle}>
			<h1>Controls</h1>

			<AxisControls
				axisName="X-Axis"
				plusHandler={() => moveAxis(AXIS.X, CMD.INCREASE)}
				minusHandler={() => moveAxis(AXIS.X, CMD.DECREASE)}
			/>
			<AxisControls
				axisName="Y-Axis"
				plusHandler={() => moveAxis(AXIS.Y, CMD.INCREASE)}
				minusHandler={() => moveAxis(AXIS.Y, CMD.DECREASE)}
			/>
			<AxisControls
				axisName="Z-Axis"
				plusHandler={() => moveAxis(AXIS.Z, CMD.INCREASE)}
				minusHandler={() => moveAxis(AXIS.Z, CMD.DECREASE)}
			/>
		</div>
	);
};

export default ButtonPanelLeft;
