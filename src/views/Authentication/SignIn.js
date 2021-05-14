import Header from "../../components/Header";
import Button from "../../components/Buttons";
import Image from "../../components/Image";
import Footer from "../../components/Footer";
import { Grid, Typography, Input } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
	inputs: {
		paddingTop: "0px",
		marginRight: "150px",
		width: "327px",
		height: "40px",
		background: "#FFFFFF",
		border: "1px solid rgba(0, 0, 0, 0.5)",
		boxSizing: "border- box",
		lineHeight: "28px",
	},
	inputsDiv: {
		padding: "0px 0px 50px 90px",
	},
	buttonDiv: {
		padding: "0px 0px 0px 140px",
	}
}))

const SignIn = () => {
	const classes = useStyles();
	return (
		<>
			<Header />
			<Grid container spacing={1} direction="row" justify="center" alignItems="flex-end">
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<form>
						<Typography variant="subtitle2">Sign In</Typography>
						<div className={classes.inputsDiv} >
							<Input placeholder="Email Address" variant="outlined" className={classes.inputs} />
							<Input placeholder="Create Password" variant="outlined" className={classes.inputs} />
						</div>
						<div className={classes.buttonDiv} >
							<Button text="Sign In" />
							<p> <a href="#">Forgot Password?</a>|<a href="#">Register</a></p>
						</div>
					</form>
				</Grid>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Image src="https://via.placeholder.com/698x743" />
				</Grid>
			</Grid>
			<Footer />
		</>
	);
};

export default SignIn;
