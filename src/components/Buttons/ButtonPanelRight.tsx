import React, { useState } from "react";
import BigButton from "./BigButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Fab } from "@mui/material";
import { CSSProperties } from "react";
import { Preset } from "../../services/localStorage";
import PresetModal from "../PresetModal";
import useArmState from "../../hooks/useArmState";

const wrapperStyle: CSSProperties = {
	position: "absolute",
	right: 20,
	top: 120,
	display: "flex",
	flexDirection: "column",
	gap: "1.5rem",
};

const managePresetsWrapperStyle: CSSProperties = {
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	width: "100%",
};

const fabStyle: CSSProperties = {
	width: 80,
	height: 80,
	fontSize: "2rem",
};

const ButtonPanelRight = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const presets = JSON.parse(localStorage.getItem("presets") || "[]");
	const { currentCoords } = useArmState(isModalOpen);
	console.log({ currentCoords });

	return (
		<div style={wrapperStyle}>
			<h1>Presets</h1>
			{presets.map((preset: Preset) => (
				<BigButton
					key={preset.name}
					label={preset.name}
					onClick={() => {
						console.log("Clicked preset:", preset.name);
					}}
				/>
			))}

			<div style={managePresetsWrapperStyle}>
				<Fab color="primary" aria-label="add" sx={fabStyle} onClick={() => setIsModalOpen(true)}>
					<AddIcon />
				</Fab>
				<Fab color="secondary" aria-label="remove" sx={fabStyle}>
					<RemoveIcon />
				</Fab>
			</div>
			<PresetModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} currentCoords={currentCoords} />
		</div>
	);
};

export default ButtonPanelRight;
