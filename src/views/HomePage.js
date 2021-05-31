import Header from "../components/Header";
import Image from "../components/Image";
import Section from "../components/Section";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
	SECTION_DATA as sectionData,
	HEADER_IMAGES as headerImages,
	PARTNER_IMAGES as partnerImages,
	CAROUSEL_IMAGES as carouselImages
} from "../data/constants";
import image7 from "../assets/image7.svg"
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles(() => ({
	partners: {
		marginLeft: "45px",
		padding: "50px 0 120px 0"
	},
	header: {
		height: "600px",
		background: "#E5E5E5",
		border: "0px solid rgba(0, 0, 0, 0.3)",
		boxSizing: "border-box",
	},
	navbar: {
		background: "#E5E5E5"
	},
	headerImages: {
		margin: "-124px 0px 0px 100px",
	},
	overlay: {
		backgroundColor: "#282335",
		height: "200px",
		width: "255px",
		opacity: "0.7",
		borderRadius: "100px",
		color: "#black",
		textAlign: "center"
	}
}));
const HomePage = () => {
	const classes = useStyles();
	return (
		<>
			<div className={classes.navbar}>
				<Header />
			</div>
			<div className={classes.header}>
				<Image src={image7} height="600px" width="1520px" />
			</div>
			<div className={classes.headerImages}>
				<Grid container spacing={1} direction="row" justify="center" alignItems="flex-end">
					{headerImages.map(({ text, src }, i) => (
						<Grid item md={3} xl={3} xs={12} sm={6} key={i} >
							<div className={classes.overlay}>
								<Image src={src} text={text} width="258px" height="200px" />
							</div>
						</Grid>
					))}
				</Grid>
			</div>

			{sectionData.map(({ title, content, text, src }, i) => (
				<Section title={title} content={content} text={text} src={src} key={i} />
			))}
			<ReactCarousel autoPlay showArrows={true}>
				{carouselImages.map(({ src, content }, i) => (
					<Carousel src={src} content={content} key={i} />
				))}
			</ReactCarousel>


			<div className={classes.partners}>
				<Typography variant="h3">Our Partners</Typography>

				<Grid container spacing={1}>
					{partnerImages.map(({ src }, i) => (
						<Grid item md={2} xs={2} className={classes.partners} key={i}>
							<Image src={src} width="169px" height="88px" />
						</Grid>
					))}
				</Grid>
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
