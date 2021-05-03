import Header from '../components/Header'
import Image from '../components/Image'
import Section from '../components/Section'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    partnersHeader: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        color: '#000000',
        textAlign: "center",
        padding: "0 350px 50px 0"
    },
    partners: {
        marginLeft: "350px",
        padding: "50px 0 100px 0"
    },
    control: {
        padding: theme.spacing(2)
    },
    header: {
        paddingTop: '300px',
        background: '#E5E5E5',
        border: '0px solid rgba(0, 0, 0, 0.3)',
        boxSizing: 'border-box'
    },
    navbar: {
        background: '#E5E5E5',
    }

}))
const HomePage = () => {
    const classes = useStyles()
    const sectionData = [{
        title: "About", content: "This is an about section", text: "View More", src: "https://via.placeholder.com/436x242"
    },
    {
        title: "Programmes", content: "This is a programmes section", text: "View More", src: "https://via.placeholder.com/436x242"

    },
    {
        title: "Registration", content: "This is a registration section", text: "Register", src: "https://via.placeholder.com/436x242"
    }]

    const headerImages = [{
        src: "https://via.placeholder.com/258x318", text: "ZANZIBAR SPICE TOUR"

    },
    {
        src: "https://via.placeholder.com/258x318", text: "SLAVE TRADE TOUR"
    },
    {
        src: "https://via.placeholder.com/258x318", text: "MWALIMU NYERERE TOUR"
    },
    {
        src: "https://via.placeholder.com/258x318", text: "KIGALI REMEMBERANCE TOUR"
    }

    ]
    return (
        <div>
            <div className={classes.navbar}><Header /></div>
            <div className={classes.header}>
                <div className={classes.control}>
                    <Grid container spacing={1} direction="row" justify="center" alignItems="flex-end">
                        {headerImages.map(data => (
                            <Grid item md={3} xl={3} xs={12} sm={6}>
                                <Image src={data.src} text={data.text} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
            {sectionData.map(section => (
                <Section title={section.title} content={section.content} text={section.text} src={section.src} />
            ))}

            <Carousel src="https://via.placeholder.com/436x242" content="This is a testimonial" />

            <div className={classes.partners}>
                <h3 className={classes.partnersHeader}>Our Partners</h3>
                <Grid container spacing={1}>
                    <Grid item xs={2}>
                        <Image src="https://via.placeholder.com/169x88" />
                    </Grid>
                    <Grid item xs={2}>
                        <Image src="https://via.placeholder.com/169x88" />
                    </Grid>
                    <Grid item xs={2}>
                        <Image src="https://via.placeholder.com/169x88" />
                    </Grid>

                    <Grid item xs={2}>
                        <Image src="https://via.placeholder.com/169x88" />
                    </Grid>

                    <Grid item xs={2}>
                        <Image src="https://via.placeholder.com/169x88" />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage
