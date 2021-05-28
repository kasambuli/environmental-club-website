import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Button from "./Buttons";
import Image from "./Image";
import { makeStyles } from "@material-ui/core/styles";
import {
	HEADER_ICON_BUTTONS as iconbuttons,
	AUTHENTICATION_BUTTONS as authButtons
} from "../data/constants";
import { useHistory } from "react-router-dom";
import logo from "../assets/logo.svg"

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		backgroundColor: "transparent"
	},
	authentication: {
		display: "flex",
		marginLeft: "auto"
	},
	navbar: {
		backgroundColor: "inherit",
		'& .MuiIconButton-label': {
			color: "#282335"
		}
	}
});

const Header = () => {
	const classes = useStyles();
	const history = useHistory();
	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<Image src={logo} width-="40px" height="40px" />
					<Typography variant="subtitle1">
						{iconbuttons.map(({ url, title }, i) => (
							<IconButton variant="h1" onClick={() => {
								history.push(url);
							}} key={i}>{title}</IconButton>
						))}
					</Typography>
					{authButtons.map(({ url, text }, i) => (
						<div onClick={() => {
							history.push(url);
						}} key={i}> <Button text={text} className={classes.authentication}
							/></div>
					))}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
