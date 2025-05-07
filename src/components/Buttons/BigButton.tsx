import { Button } from "@mui/material";

type BigButtonProps = {
	label: string;
} & React.ComponentProps<typeof Button>;

const BigButton = ({ label, sx, ...props }: BigButtonProps) => {
	return (
		<Button
			variant="contained"
			color="primary"
			onClick={props.onClick}
			sx={{
				fontSize: "1.25rem", // Increase font size
				padding: "0.75rem 1.5rem", // Increase padding
				minWidth: "150px", // Ensure a larger button width
				...sx,
			}}
			{...props}
		>
			{label}
		</Button>
	);
};

export default BigButton;
