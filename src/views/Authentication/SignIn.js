import Form from "../../components/Form"
import Header from "../../components/Header";
import Image from "../../components/Image";
import Footer from "../../components/Footer";
import { Grid } from '@material-ui/core';

const signinInputs = [
	{ placeholder: "Email Address", type: "text", variant: "outlined" },
	{ placeholder: "Create Password", type: "text", variant: "outlined" },
]

const SignIn = () => {
	return (
		<>
			<Header />
			<Grid container spacing={1} direction="row" justify="center" alignItems="flex-end">
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Form headingText="Sign In" inputProps={signinInputs} />
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
