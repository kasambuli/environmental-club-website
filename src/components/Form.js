import { Typography, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Buttons";
import { REGISTRATION_INPUTS as regInputs, SIGNIN_INPUTS as inputs } from "../data/constants";

const useStyles = makeStyles((theme) => ({
    inputsSection: {
        padding: "0px 0px 50px 90px",
    },
    buttonSection: {
        padding: "0px 0px 0px 140px",
    },
    signinInputs: {
        paddingTop: "0px",
        marginRight: "150px",
        width: "327px",
        height: "40px",
        background: "#FFFFFF",
        border: "1px solid rgba(0, 0, 0, 0.5)",
        boxSizing: "border- box",
        lineHeight: "28px",
    },
    registrationInputs: {
        paddingTop: "0px",
        marginRight: "150px",
        width: "327px",
        height: "40px",
        background: "#FFFFFF",
        border: "1px solid rgba(0, 0, 0, 0.5)",
        boxSizing: "border- box",
        lineHeight: "28px",
    }
}))

const Form = ({ headingText, inputLength, inputType, variant, placeholder }) => {
    const classes = useStyles();
    const renderInput = () => {
        if (inputLength == "2") {
            return (
                <div className={classes.inputsSection}>
                    {inputs.map((input) => (
                        <Input inputType={input.inputType} placeholder={input.placeholder} variant={variant} className={classes.signinInputs} />
                    ))}
                </div>
            )
        }
        else {
            return (
                <div className={classes.inputsSection}>
                    {regInputs.map((input) => (
                        <Input inputType={input.inputType} placeholder={input.placeholder} variant={variant} className={classes.registrationInputs} />
                    ))}
                </ div>
            )
        }
    }
    return (
        <form>
            <Typography variant="subtitle2">{headingText}</Typography>
            {renderInput()}
            <div className={classes.buttonSection} >
                <Button text={headingText} />
                <p> <a href="#">Forgot Password?</a></p>
            </div>
        </form>
    )
}

export default Form
