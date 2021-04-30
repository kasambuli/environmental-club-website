import Image from './Image'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    footer: {
        height: '318px',
        left: '0px',
        top: '2431px',
        background: '#C4C4C4'
    },
    headings: {
        width: '119px',
        height: '28px',
        left: '679px',
        top: '2498px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#000000',
        paddingTop: '40px',
        paddingBottom: '40px'
    },
    listItems: {
        width: '93px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '24px',
        lineHeight: '28px',
        color: '#000000'
    },
    connect: {
        background: '#E5E5E5',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        borderRadius: '100px',
        width: '60px',
        height: '60px'
    }
})
const Footer = () => {
    const classes = useStyles()
    return (
        <div className={classes.footer}>
            <Grid container spacing={1}>
                <Grid item md={3} xl={3} xs={12} sm={6}>
                    <Image src='https://via.placeholder.com/40' alt="logo" />LOGO
                </Grid>
                <Grid item md={3} xl={3} xs={12} sm={6}>
                    <Typography className={classes.headings}>
                        Quick Links
                    </Typography>
                    <Typography className={classes.listItems}>Link 1</Typography>
                    <Typography className={classes.listItems}>Link 2</Typography>
                    <Typography className={classes.listItems}>Link 3</Typography>
                    <Typography className={classes.listItems}>Link 4</Typography>

                </Grid>
                <Grid item md={3} xl={3} xs={12} sm={6}>
                    <Typography className={classes.headings}>
                        Contact Us
                     </Typography>
                    <Typography className={classes.listItems}>Email </Typography>
                    <Typography className={classes.listItems}>Location</Typography>
                    <Typography className={classes.listItems}>Phone</Typography>
                </Grid>
                <Grid item md={3} xl={3} xs={12} sm={6}>
                    <Typography className={classes.headings}>
                        Connect
                     </Typography>
                    <Grid container spacing={1}>
                        <Grid item md={3} xl={3} xs={12} sm={6} className={classes.connect}>
                            <Image src="#" />
                        </Grid>

                        <Grid item md={3} xl={3} xs={12} sm={6} className={classes.connect}>
                            <Image src="#" />
                        </Grid>

                        <Grid item md={3} xl={3} xs={12} sm={6} className={classes.connect}>
                            <Image src="#" />
                        </Grid>

                        <Grid item md={3} xl={3} xs={12} sm={6} className={classes.connect}>
                            <Image src="#" />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer
