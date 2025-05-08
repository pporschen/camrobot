import { CSSProperties } from "react";
import BigButton from "./BigButton";

type AxisControlsProps = {
	plusHandler?: () => void;
	minusHandler?: () => void;
	axisName: string;
};

const controlWrapper: CSSProperties = {
	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
};

const controlTextStyle: CSSProperties = {
	marginBottom: "0.5rem",
};

const AxisControls = ({
	axisName,
	plusHandler = () => console.log("Up"),
	minusHandler = () => console.log("Down"),
}: AxisControlsProps) => {
	return (
		<div style={controlWrapper}>
			<div style={controlTextStyle}>
				<h2>{axisName}</h2>
			</div>
			<BigButton label="+" onClick={plusHandler} />
			<BigButton label="-" onClick={minusHandler} />
		</div>
	);
};

export default AxisControls;
