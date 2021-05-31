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
	PARTNER_IMAGES as partnerImages
} from "../data/constants";
import image7 from "../assets/image7.jpg"

const useStyles = makeStyles(() => ({
	partners: {
		marginLeft: "45px",
		padding: "50px 0 100px 0"
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
		margin: "-250px 0px 0px 100px",
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
					{headerImages.map((data, i) => (
						<Grid item md={3} xl={3} xs={12} sm={6} key={i}>
							<Image src={data.src} text={data.text} width="258px" height="318px" />
						</Grid>
					))}
				</Grid>
			</div>

			{sectionData.map((section, i) => (
				<Section title={section.title} content={section.content} text={section.text} src={section.src} key={i} />
			))}

			<Carousel
				src="https://via.placeholder.com/436x242"
				content="This is a testimonial"
			/>

			<div className={classes.partners}>
				<Typography variant="h3">Our Partners</Typography>

				<Grid container spacing={1}>
					{partnerImages.map((data, i) => (
						<Grid item md={2} xs={2} className={classes.partners} key={i}>
							<Image src={data.src} width="169px" height="88px" />
						</Grid>
					))}
				</Grid>
			</div>
			<Footer />
		</>
	);
};

export default HomePage;
