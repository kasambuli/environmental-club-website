import Header from "../../components/Header";
import Button from "../../components/Buttons";
import Image from "../../components/Image";
import Footer from "../../components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Form, Field, Input } from "@material-ui/core";

const useStyles = makeStyles({
	image: {
		background: "#E5E5E5",
		border: "1px solid rgba(0, 0, 0, 0.3)",
		boxSizing: "border- box"
	},
	inputFields: {
		width: "327px",
		height: "40px",
		background: "#FFFFFF",
		border: "1px solid rgba(0, 0, 0, 0.5)",
		boxSizing: "border- box"
	},
	form: {
		paddingLeft: "90px",
	},
	button: {
		width: "184px",
		height: "46px",
		paddingLeft: "45px",
		paddingTop: "100px",
		borderRadius: "90px"
	}
})
const SignIn = () => {
	const classes = useStyles();
	return (
		<div>
			<Header />
			<Grid container spacing={1}>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Typography variant="subtitle2">
						Sign In
					</Typography>
					<form className={classes.form}>
						<Input type="text" placeholder="Email Address" className={classes.inputFields} />
						<Input type="text" placeholder="Create Password" className={classes.inputFields} />
						<div className={classes.button}>
							<Button text="Sign In" />
						</div>
						<Typography variant="caption">
							Forgot Password?   |   Register
						</Typography>
					</form>
				</Grid>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Image src="https://via.placeholder.com/750x750" className={classes.image} />
				</Grid>
			</Grid>
			<Footer />
		</div>
	);
};

export default SignIn;
