import Image from "./Image";
import { Grid, Typography } from "@material-ui/core";
import Button from "./Buttons";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types'

const useStyles = makeStyles({
	section: {
		marginTop: "180px"
	},
	image: {
		position: "absolute",
		left: "280px"
	},
	loremIpsum:{
		width:"500px"
	}
});

const Section = ({ title, content, text, src }) => {
	const classes = useStyles();

	return (
		<div className={classes.section}>
			<Grid container spacing={1}>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<div className={classes.image}>
						<Image src={src} height="242px" width="436px" />
					</div>
				</Grid>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Typography variant="h6">{title}</Typography>
					<Typography variant="body2" className={classes.loremIpsum}>{content}</Typography>
					<Button text={text} />
				</Grid>
			</Grid>
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.object.isRequired,
	content: PropTypes.object.isRequired,
	text: PropTypes.object.isRequired,
	src: PropTypes.object.isRequired,
}

export default Section;
