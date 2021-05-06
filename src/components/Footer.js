import Image from "./Image";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
	FOOTER_LIST_ITEMS as listItems,
	CONTACT_ITEMS as contactItems,
	FOOTER_IMAGES as footerImages
} from "../data/constants";

const useStyles = makeStyles({
	footer: {
		height: "318px",
		left: "0px",
		top: "2431px",
		background: "#C4C4C4"
	},
	connect: {
		background: "#E5E5E5",
		border: "1px solid rgba(0, 0, 0, 0.3)",
		borderRadius: "100px",
		width: "60px",
		height: "60px"
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
						{footerImages.map((image) => (
							<Grid item md={3} xl={3} xs={12} sm={6} className={classes.connect}>
								<Image src={image.src} />
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
