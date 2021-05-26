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
import image7 from "../assets/image7.svg"
import image3 from "../assets/image3.svg"

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
		textAlign:"center"
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
						<Grid item md={3} xl={3} xs={12} sm={6} key={i} >
							<div className={classes.overlay}>
								<Image src={data.src} text={data.text} width="258px" height="200px" />
							</div>
						</Grid>
					))}
				</Grid>
			</div>

			{sectionData.map((section, i) => (
				<Section title={section.title} content={section.content} text={section.text} src={section.src} key={i} />
			))}

			<Carousel
				src={image3}
				content="Lacus, quis arcu nibh id et phasellus ut elementum. Lobortis sodales commodo amet facilisi cras velit hendrerit praesent ultrices. At metus ac."
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
