import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from 'prop-types'

const useStyles = makeStyles({
	button: {
		width: "155.93px",
		height: "46px",
		left: "1086px",
		top: "25px",
		background: "#282335",
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

Button.propTypes = {
	text: PropTypes.string.isRequired
}

export default Button;
