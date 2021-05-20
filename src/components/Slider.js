import { BsFillCircleFill } from 'react-icons/bs';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    circles: {
        borderLeft: "1px solid black",
        height: "170px",
        marginLeft: "7px"
    },
    root: {
        padding: "90px 0px 0px 200px"
    }

}))

const Slider = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {[...Array(4)].map(() => (<><BsFillCircleFill /> <div className={classes.circles}></div></>))}
            <BsFillCircleFill />
        </div>
    )
};

export default Slider;
