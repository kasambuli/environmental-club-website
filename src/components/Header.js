import { AppBar, Toolbar, Button } from "@material-ui/core"
import Buttons from "./Buttons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        backgroundColor: "transparent"
    },
    button: {
        textAlign: "center",
        flexGrow: 1,
        color: "black"
    },
    authentication: {
        display: "flex",
        marginLeft: "auto"
    },
    navbar: {
        backgroundColor: "inherit"
    }
})
const Header = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <img src="https://via.placeholder.com/40" alt="" />
                    <div className={classes.button}>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Programmes</Button>
                        <Button color="inherit">Cohorts</Button>
                        <Button color="inherit">Gallery</Button>
                    </div>
                    <div >
                        <Buttons text="Sign In" className={classes.authentication} />
                        <Buttons text="Register" className={classes.authentication} />
                    </div>

                </Toolbar>

            </AppBar>
        </div>
    )
}

export default Header
