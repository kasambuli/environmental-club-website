import Image from "./Image";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
	FOOTER_LIST_ITEMS as listItems,
	CONTACT_ITEMS as contactItems,
} from "../data/constants";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillMail } from "react-icons/ai";
import logo from "../assets/logo.svg"

const useStyles = makeStyles({
	footer: {
		height: "318px",
		left: "0px",
		top: "2431px",
		background: "#282335",
		color: "#63DBD2"
	},
	logo: {
		marginTop: "50px",
		display: "flex",
		justifyContent: "center"
	}
});
const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<Grid container spacing={1}>
				<Grid item md={3} xl={3} xs={12} sm={6} className={classes.logo}>
					<Image src={logo} height="40px" width="40px" alt="logo" />
				</Grid>
				<Grid item md={3} xl={3} xs={12} sm={6}>
					<Typography variant="h4">Quick Links</Typography>
					{listItems.map(({ link }, i) => (
						<Typography variant="h5" key={i}>{link}</Typography>
					))}
				</Grid>
				<Grid item md={3} xl={3} xs={12} sm={6}>
					<Typography variant="h4">Contact Us</Typography>
					{contactItems.map(({ contact }, i) => (
						<Typography variant="h5" key={i}>{contact} </Typography>
					))}
				</Grid>
				<Grid item md={3} xl={3} xs={12} sm={6}>
					<Typography variant="h4">Connect</Typography>
					<Grid container spacing={1}>
						<Grid item md={3} xl={3} xs={12} sm={6}>
							<AiFillMail />
						</Grid>
						<Grid item md={3} xl={3} xs={12} sm={6}>
							<AiFillTwitterCircle />
						</Grid>
						<Grid item md={3} xl={3} xs={12} sm={6}>
							<AiFillInstagram />
						</Grid>
						<Grid item md={3} xl={3} xs={12} sm={6}>
							<AiFillFacebook />
						</Grid>

					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
