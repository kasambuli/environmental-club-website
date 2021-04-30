import Image from './Image'
import { Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    image: {
        position: "absolute",
        left: "450px"
    },
    content: {
        marginLeft: "50px",
        marginTop: '100px',
        width: '573px',
        height: '99px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#000000'
    },
    carousel: {
        marginTop: '250px',
        height: '250px',
        background: '#C4C4C4'
    }
})
const Carousel = ({ src, content }) => {
    const classes = useStyles()
    return (
        <div className={classes.carousel}>
            <Grid container spacing={1}>
                <Grid item md={6} xl={6} xs={12} sm={6}>
                    <div className={classes.image}>
                        <Image src={src} />
                    </div>
                </Grid>
                <Grid item md={6} xl={6} xs={12} sm={6}>
                    <p className={classes.content}>{content}</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Carousel
