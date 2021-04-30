import Image from './Image'
import { Grid } from '@material-ui/core';
import Buttons from './Buttons'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    section: {
        marginTop: "180px"
    },
    image: {
        position: "absolute",
        left: "450px"
    },
    content: {
        width: '573px',
        height: '80px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#000000'
    },
    title: {
        width: '65px',
        height: '28px',
        left: '695px',
        top: '821px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#000000'
    }
})
const Section = ({ title, content, text, src }) => {
    const classes = useStyles()

    return (
        <div className={classes.section}>
            <Grid container spacing={1}>
                <Grid item md={6} xl={6} xs={12} sm={6}>
                    <div className={classes.image}>
                        <Image src={src} />
                    </div>
                </Grid>
                <Grid item md={6} xl={6} xs={12} sm={6}>
                    <h4 className={classes.title}>{title}</h4>
                    <p className={classes.content}>{content}</p>
                    <Buttons text={text} />
                </Grid>

            </Grid>

        </div>
    )
}

export default Section
