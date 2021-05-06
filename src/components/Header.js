import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Button from "./Buttons";
import Image from "./Image";
import { makeStyles } from "@material-ui/core/styles";
import {
	HEADER_ICON_BUTTONS as iconbuttons,
	AUTHENTICATION_BUTTONS as authButtons
} from "../data/constants";

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
		backgroundColor: "inherit"
	}
});
const Header = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<Image src="https://via.placeholder.com/40" />
					<Typography variant="subtitle1">
						{iconbuttons.map((button) => (
							<IconButton variant="h1">{button.title}</IconButton>
						))}
					</Typography>
					{authButtons.map((auth) => (
						<Button text={auth.text} className={classes.authentication} />
					))}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
