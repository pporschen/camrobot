import { CSSProperties } from "react";
import { RO_ARM_IP } from "../consts/consts";

const wrapperStyle: CSSProperties = {
	position: "absolute",
	left: 20,
	bottom: 20,
};

const ShowIpAddress = () => {
	return <div style={wrapperStyle}>{RO_ARM_IP}</div>;
};

export default ShowIpAddress;
