import Header from "../components/Header";
import Button from "../components/Buttons";
import Footer from "../components/Footer";
import Program from "../components/Program";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
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
		marginTop: "-101px"
	}

}))
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
			<p className={classes.paragraph1}>Pretium lectus non purus nunc interdum. Nunc malesuada at egestas in sed. Lectus nulla tempor donec tempus metus semper tempor. Aliquam, vulputate quam habitant convallis morbi nec aenean pharetra neque. Non sit elementum nulla facilisis commodo quisque proin mauris. Lobortis risus id elementum.</p>

			<Program content="Pretium lectus non purus nunc interdum. Nunc malesuada at egestas in sed. Lectus nulla tempor donec tempus metus semper tempor. Aliquam, vulputate quam habitant convallis morbi nec aenean pharetra neque. Non sit elementum nulla facilisis commodo quisque proin mauris. Lobortis risus id elementum." />

			<Program content="Pretium lectus non purus nunc interdum. Nunc malesuada at egestas in sed. Lectus nulla tempor donec tempus metus semper tempor. Aliquam, vulputate quam habitant convallis morbi nec aenean pharetra neque. Non sit elementum nulla facilisis commodo quisque proin mauris. Lobortis risus id elementum." />

			<Program content="Pretium lectus non purus nunc interdum. Nunc malesuada at egestas in sed. Lectus nulla tempor donec tempus metus semper tempor. Aliquam, vulputate quam habitant convallis morbi nec aenean pharetra neque. Non sit elementum nulla facilisis commodo quisque proin mauris. Lobortis risus id elementum." />

			<Program content="Pretium lectus non purus nunc interdum. Nunc malesuada at egestas in sed. Lectus nulla tempor donec tempus metus semper tempor. Aliquam, vulputate quam habitant convallis morbi nec aenean pharetra neque. Non sit elementum nulla facilisis commodo quisque proin mauris. Lobortis risus id elementum." />

			<Program content="Pretium lectus non purus nunc interdum. Nunc malesuada at egestas in sed. Lectus nulla tempor donec tempus metus semper tempor. Aliquam, vulputate quam habitant convallis morbi nec aenean pharetra neque. Non sit elementum nulla facilisis commodo quisque proin mauris. Lobortis risus id elementum." />

			<h3>Program Activities</h3>
			<ul>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<li>Activity here</li>
				<div className="join">
					<h3>Why join?</h3>
					<p>Lorem Ipsum</p>
					<Button text="Register" />
				</div>
				<Footer />
			</ul>
		</div>
	);
};

export default Programmes;
