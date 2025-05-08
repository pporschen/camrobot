import { CSSProperties } from "react";
import { RO_ARM_IP } from "../consts/consts";

const wrapperStyle: CSSProperties = {
	position: "absolute",
	left: 20,
	bottom: 20,
};

const ShowIpAddress = () => {
	return (
		<div style={wrapperStyle}>
			<a href={`http://${RO_ARM_IP}`} target="_blank" rel="noopener noreferrer">
				{RO_ARM_IP}
			</a>
		</div>
	);
};

export default ShowIpAddress;
