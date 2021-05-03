import { AppBar, Toolbar, IconButton } from "@material-ui/core"
import Button from "./Buttons";
import Image from './Image';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "transparent"
    },
    button: {
        width: "420px",
        height: "25px",
        left: '285px',
        top: '36px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '31px',
        lineHeight: '25px',
        color: 'black',
        textAlign: "center",
        flexGrow: "1"
    },
    authentication: {
        display: "flex",
        marginLeft: "auto"
    },
    navbar: {
        backgroundColor: "inherit"
    },
    title: {
        flexGrow: 1,
    },

})
const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Image src="https://via.placeholder.com/40" alt="" />
                    <div className={classes.button}>
                        <IconButton className={classes.title}>
                            About
                        </IconButton>
                        <IconButton className={classes.title}>
                            Programmes
                        </IconButton>
                        <IconButton className={classes.title}>
                            Cohorts
                        </IconButton>
                        <IconButton className={classes.title}>
                            Gallery
                        </IconButton>
                    </div>
                    <div >
                        <Button text="Sign In" className={classes.authentication} />
                        <Button text="Register" className={classes.authentication} />
                    </div>

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Header
