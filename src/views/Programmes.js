import Header from "../components/Header";
import Button from "../components/Buttons";
import Footer from "../components/Footer";
import Program from "../components/Program";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { LOREM_IPSUM_TEXT as loremIpsumText, ACTIVITIES as activties } from "../data/constants"
const useStyles = makeStyles((theme) => ({
	title: {
		height: "242px",
		left: "0px",
		top: "109px",
		background: "#EAEAEA",
		display: "flex",
		alignItems: "center",
	},
	video: {
		marginLeft: "675px",
		marginTop: "-136px",
	},
	paragraph1: {
		width: "444px",
		height: "237px",
		paddingLeft: "148px",
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#000000",
		margin: "-101px 0px 80px 0px ",
	},
	activities: {
		width: "135px",
		paddingLeft: "228px",
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "normal",
		fontSize: "24px",
		lineHeight: "28px",
		color: "#000000"
	},
	join: {
		height: "243px",
		left: "0px",
		background: "#E5E5E5",
		display: "flex",
		alignItems: "center"
	},
	button: {
		paddingLeft: "200px"
	},
	activitiesDiv:{
		marginBottom:"100px"
	}
}

))
const Programmes = () => {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<div className={classes.title}>
				<Typography variant="subtitle2">Programmes</Typography>
			</div>

			<video width="567" height="292" className={classes.video} controls>
				<source src="#" type="video/mp4" />
			</video>
			<p className={classes.paragraph1}>{loremIpsumText[0].text}</p>
			{loremIpsumText.map((data) => (
				<Program content={data.text} />
			))}

			<Typography variant="subtitle2">Program Activities</Typography>
			<div className ={classes.activitiesDiv}>
				<Grid container spacing={1}>
					{activties.map((data) => (
						<Grid item md={4} xs={6}>
							<p className={classes.activities}>{data.text}</p>
						</Grid>
					))}
					{activties.map((data) => (
						<Grid item md={4} xs={6}>
							<p className={classes.activities}>{data.text}</p>
						</Grid>
					))}
					{activties.map((data) => (
						<Grid item md={4} xs={6}>
							<p className={classes.activities}>{data.text}</p>
						</Grid>
					))}
				</Grid>
			</div>
		
			<div className={classes.join}>
				<Grid container spacing={1}>
					<Grid item md={4} xs={6}>
						<Typography variant="subtitle2">Why join?</Typography>
					</Grid>
					<Grid item md={4} xs={6}>
						<Typography variant="body2">Pretium lectus non purus nunc interdum. Nunc malesuada at egestas in sed. Lectus nulla tempor donec tempus metus semper tempor. </Typography>
					</Grid>
					<Grid item md={4} xs={6} >
						<div className={classes.button}>
							<Button text="Register" />
						</div>
					</Grid>
				</Grid>
			</div>
			<Footer />
		</div >
	);
};

export default Programmes;
