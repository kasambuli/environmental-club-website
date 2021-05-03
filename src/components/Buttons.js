import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        backgroundColor: "black",
        color: "white",
        width: "155.93px",
        height: "46px",
        left: "1086px",
        top: "25px",
        background: "#333333",
        borderRadius: "90px",
        fontSize: "21px",
        fontWeight: "400",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        lineHeight: "25px",
        textAlign: "center",
        border: '0px'

    }
})
const Button = ({ text }) => {
    const classes = useStyles();
    return <button className={classes.button}>{text}</button>
}
export default Button