import Header from "../../components/Header";
import Form from "../../components/Form"
import Image from "../../components/Image";
import Footer from "../../components/Footer";
import { Grid, Typography, Input } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const Registration = () => {
	return (
		<>
			<Header />
			<Grid container spacing={1} direction="row" justify="center" alignItems="flex-end">
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Form headingText="Register" variant="outlined" inputLength="4" />
				</Grid>
				<Grid item md={6} xl={6} xs={12} sm={6}>
					<Image src="https://via.placeholder.com/698x743" />
				</Grid>
			</Grid>
			<Footer />
		</>
	);
};

export default Registration;
