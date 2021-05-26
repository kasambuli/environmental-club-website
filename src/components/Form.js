import { Typography, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "./Buttons";
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    inputsSection: {
        padding: "0px 0px 50px 100px",
    },
    buttonSection: {
        padding: "0px 0px 0px 150px",
    },
    signinInputs: {
        '&.MuiInputBase-root': {
            marginTop: "0px",
            fontSize: "20px",
            width: "300px",
            background: "#FFFFFF",
            color: "#041726",
        }
    },
    form: {
        height: "580px",
        padding: "0px 0px 50px 100px",
    }
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
        <form className={classes.form}>
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
