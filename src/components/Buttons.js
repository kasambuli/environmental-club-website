import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        backgroundColor: "black",
        color: "white",
        borderRadius: "30px",
        paddingRight: "30px",
        paddingLeft: "30px",
        paddingTop:"10px",
        paddingBottom: "10px",
        marginRight:"10px",
        border:"0px"

    }
})
const Buttons = ({ text }) => {
    const classes = useStyles();
    return <button className={classes.button}>{text}</button>
}
export default Buttons