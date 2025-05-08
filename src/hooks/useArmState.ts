import { useState, useEffect } from "react";

export type ArmState = {
	x: number;
	y: number;
	z: number;
	[key: string]: number; // Add additional properties if needed
};

const GET_STATE_COMMAND = { T: 105 };

const useArmState = () => {
	const [armState, setArmState] = useState<ArmState | null>(null);
	const coords = armState ? [armState.x, armState.y, armState.z] : [];

	const queryParams = encodeURIComponent(JSON.stringify(GET_STATE_COMMAND));

	useEffect(() => {
		const fetchArmState = async () => {
			try {
				const response = await fetch(`/js?json=${queryParams}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setArmState(data);
			} catch (error) {
				console.error("Error fetching arm state:", error);
			}
		};

		fetchArmState();
	}, [queryParams]);

	return { armState, currentCoords: coords };
};

export default useArmState;
