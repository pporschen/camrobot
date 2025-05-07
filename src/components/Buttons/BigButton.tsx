import { Button } from "@mui/material";

type BigButtonProps = {
	onClick: () => void;
	label: string;
};

const BigButton = ({ label, onClick }: BigButtonProps) => {
	return (
		<Button
			variant="contained"
			color="primary"
			onClick={onClick}
			sx={{
				fontSize: "1.25rem", // Increase font size
				padding: "0.75rem 1.5rem", // Increase padding
				minWidth: "150px", // Ensure a larger button width
			}}
		>
			{label}
		</Button>
	);
};

export default BigButton;
