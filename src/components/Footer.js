import Image from "./Image";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
	FOOTER_LIST_ITEMS as listItems,
	CONTACT_ITEMS as contactItems,
	FOOTER_IMAGES as footerImages
} from "../data/constants";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillMail } from "react-icons/ai";

const useStyles = makeStyles({
	footer: {
		height: "318px",
		left: "0px",
		top: "2431px",
		background: "#041726",
		color: "#63DBD2"
	}
});
const Footer = () => {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<Grid container spacing={1}>
				<Grid item md={3} xl={3} xs={12} sm={6}>
					<Image src="https://via.placeholder.com/40" alt="logo" />
					LOGO
				</Grid>
				<Grid item md={3} xl={3} xs={12} sm={6}>
					<Typography variant="h4">Quick Links</Typography>
					{listItems.map((item) => (
						<Typography variant="h5">{item.link}</Typography>
					))}
				</Grid>
				<Grid item md={3} xl={3} xs={12} sm={6}>
					<Typography variant="h4">Contact Us</Typography>
					{contactItems.map((contact) => (
						<Typography variant="h5">{contact.contact} </Typography>
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
