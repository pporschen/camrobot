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
	currentCoords: { x: number; y: number; z: number };
};
const PresetModal = ({ isModalOpen, setIsModalOpen, currentCoords }: PresetModalProps) => {
	const [name, setName] = useState("");

	const handleAddPreset = () => {
		const presets = JSON.parse(localStorage.getItem("presets") || "[]");
		const newPreset = { name, coordinates: currentCoords };
		localStorage.setItem("presets", JSON.stringify([...presets, newPreset]));
		setIsModalOpen(false);
		setName("");
	};

	return (
		<Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
			<Box sx={modalStyle}>
				<h2 style={{ textShadow: "none" }}>Add Preset</h2>
				<TextField label="Name" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
				<TextField disabled label="X Coordinate" variant="outlined" fullWidth type="number" value={currentCoords.x} />
				<TextField disabled label="Y Coordinate" variant="outlined" fullWidth type="number" value={currentCoords.y} />
				<TextField disabled label="Z Coordinate" variant="outlined" fullWidth type="number" value={currentCoords.z} />
				<Button variant="contained" color="primary" onClick={handleAddPreset}>
					Add Preset
				</Button>
			</Box>
		</Modal>
	);
};

export default PresetModal;
