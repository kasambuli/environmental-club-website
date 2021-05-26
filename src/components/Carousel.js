import Image from "./Image";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from 'prop-types'

const useStyles = makeStyles({
	image: {
		position: "absolute",
		left: "350px"
	},
	carousel: {
		margin: "200px 0px 100px 0px",
		height: "250px",
	}
});

const Carousel = ({ src, content }) => {
	const classes = useStyles();
	return (
		<div className={classes.carousel}>
			<Grid container spacing={1}>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<div className={classes.image}>
						<Image src={src} height="242px" width="436px" />
					</div>
				</Grid>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Typography variant="body1">{content}</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

Carousel.propTypes = {
	src: PropTypes.object.isRequired,
	content: PropTypes.object.isRequired,
}

export default Carousel;
