import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
	button: {
		backgroundColor: "black",
		width: "155.93px",
		height: "46px",
		left: "1086px",
		top: "25px",
		background: "#333333",
		borderRadius: "90px",
		border: "0px"
	}
});
const Button = ({ text }) => {
	const classes = useStyles();
	return (
		<button className={classes.button}>
			<Typography variant="h2">{text}</Typography>
		</button>
	);
};
export default Button;
