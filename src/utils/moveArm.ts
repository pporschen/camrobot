const ARM_SPEED = 0.2; // Speed of the arm in m/s

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

export default moveArmToCoords;
