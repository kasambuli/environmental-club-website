import Header from "../../components/Header";
import Form from "../../components/Form"
import Image from "../../components/Image";
import Footer from "../../components/Footer";
import { Grid } from '@material-ui/core';
import image2 from "../../assets/image2.svg"

const registrationInputs = [
	{ placeholder: "Username", type: "text", variant: "outlined" },
	{ placeholder: "Email Address", type: "text", variant: "outlined" },
	{ placeholder: "Create Password", type: "text", variant: "outlined" },
	{ placeholder: "Confirm Password", type: "text", variant: "outlined" }
]

const Registration = () => {
	return (
		<>
			<Header />
			<Grid container spacing={1} direction="row" justify="center" alignItems="flex-end">
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Form headingText="Register" inputProps={registrationInputs} />
				</Grid>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Image src={image2} width="750px" height="743px" />
				</Grid>
			</Grid>
			<Footer />
		</>
	);
};

export default Registration;
