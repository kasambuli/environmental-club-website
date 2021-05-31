import { Typography, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Buttons";
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
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
        lineHeight: "28px",
        color: "#041726"
    },
}))

const Form = ({ headingText, inputProps }) => {
    const classes = useStyles();
    const renderInput = () => {
        return (
            <div className={classes.inputsSection}>
                {inputProps.map((input, i) => (
                    <Input inputType={input.inputType} placeholder={input.placeholder} variant={input.variant} className={classes.signinInputs} key={i} />
                ))}
            </div>
        )
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

Form.propTypes = {
    headingText: PropTypes.object.isRequired,
    inputProps: PropTypes.object.isRequired
}

export default Form
