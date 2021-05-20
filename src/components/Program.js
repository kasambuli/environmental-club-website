import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "842px",
		height: "120px",
		paddingLeft: "70px",
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#000000",
		marginBottom: "80px"
	}

}))

const Program = ({ content }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<p>{content}</p>
		</div>
	);
};

export default Program;
