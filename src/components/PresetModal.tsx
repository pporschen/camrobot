import { Modal, Box, TextField, Button, CSSProperties } from "@mui/material";
import { useState } from "react";

const modalStyle: CSSProperties = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	backgroundColor: "background.paper",
	padding: "1rem",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	borderRadius: "8px",
	color: "#000",
};

type PresetModalProps = {
	isModalOpen: boolean;
	setIsModalOpen: (isOpen: boolean) => void;
};
const PresetModal = ({ isModalOpen, setIsModalOpen }: PresetModalProps) => {
	const [name, setName] = useState("");
	const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });

	const handleAddPreset = () => {
		const presets = JSON.parse(localStorage.getItem("presets") || "[]");
		const newPreset = { name, coordinates: coords };
		localStorage.setItem("presets", JSON.stringify([...presets, newPreset]));
		setIsModalOpen(false);
		setName("");
		setCoords({ x: 0, y: 0, z: 0 });
	};

	return (
		<Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
			<Box sx={modalStyle}>
				<h2 style={{ textShadow: "none" }}>Add Preset</h2>
				<TextField label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
				<TextField
					label="X Coordinate"
					variant="outlined"
					fullWidth
					type="number"
					value={coords.x}
					onChange={(e) => setCoords({ ...coords, x: parseFloat(e.target.value) })}
				/>
				<TextField
					label="Y Coordinate"
					variant="outlined"
					fullWidth
					type="number"
					value={coords.y}
					onChange={(e) => setCoords({ ...coords, y: parseFloat(e.target.value) })}
				/>
				<TextField
					label="Z Coordinate"
					variant="outlined"
					fullWidth
					type="number"
					value={coords.z}
					onChange={(e) => setCoords({ ...coords, z: parseFloat(e.target.value) })}
				/>
				<Button variant="contained" color="primary" onClick={handleAddPreset}>
					Add Preset
				</Button>
			</Box>
		</Modal>
	);
};

export default PresetModal;
