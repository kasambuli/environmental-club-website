import Image from "./Image";
import { Grid, Typography } from "@material-ui/core";
import Button from "./Buttons";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
	section: {
		marginTop: "180px",
	},
	image: {
		position: "absolute",
		left: "280px",
	},
	loremIpsum: {
		width: "500px",
	},
});
const ImageGrid = ({ src, rtl = true }) => {
	const classes = useStyles();
	return (
		<Grid item md={6} xl={6} xs={6} sm={6}>
			{rtl ? <div className={classes.image}>
				<Image src={src} height="242px" width="436px" />
			</div> :
				<div>
					<Image src={src} height="242px" width="436px" />
				</div>}
		</Grid>)
}
const ContentGrid = ({ title, content, text, left }) => {
	const classes = useStyles();
	return (
		<Grid item md={6} xl={6} xs={6} sm={6} style={{ paddingLeft: left }}>
			<Typography variant="h6">{title}</Typography>
			<Typography variant="body2" className={classes.loremIpsum} >
				{content}
			</Typography>
			<Button text={text} />
		</Grid>)
}

const Section = ({ title, content, text, src, left, rtl = true }) => {
	const contentGripProps = { title, content, text, left }
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<Grid container spacing={1}>
				{rtl ? <><ImageGrid src={src} rtl={rtl} /> <ContentGrid {...contentGripProps} /></> : <><ContentGrid {...contentGripProps} /> <ImageGrid src={src} rtl={rtl} /></>}
			</Grid>
		</div>
	);
};

Section.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	rtl: PropTypes.boolean,
	left: PropTypes.number.isRequired
};
ImageGrid.propTypes = {
	src: PropTypes.string.isRequired,
	rtl: PropTypes.boolean,
};
ContentGrid.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	left: PropTypes.number.isRequired
};

export default Section;
