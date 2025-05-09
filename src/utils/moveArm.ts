const ARM_SPEED = 0.2; // Speed of the arm in m/s
enum AXIS {
	X = 1,
	Y = 2,
	Z = 3,
}

enum CMD {
	STOP = 0,
	INCREASE = 1,
	DECREASE = 2,
}

const moveArmToCoords = ({ x, y, z }: { x: number; y: number; z: number }) => {
	const command = { T: 104, x, y, z, t: 3.14, spd: ARM_SPEED };
	const queryParams = encodeURIComponent(JSON.stringify(command));
	const url = `/js?json=${queryParams}`;

	fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

const moveAxis = (axis: AXIS, cmd: CMD) => {
	const command = { T: 123, m: 1, axis, cmd, spd: ARM_SPEED };
	const queryParams = encodeURIComponent(JSON.stringify(command));
	const url = `/js?json=${queryParams}`;

	fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};

const moveArmUtils = { moveArmToCoords, moveAxis, AXIS, CMD };
export default moveArmUtils;
