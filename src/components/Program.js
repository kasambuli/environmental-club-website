import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
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

Program.propTypes = {
	content: PropTypes.object.isRequired
}

export default Program;
