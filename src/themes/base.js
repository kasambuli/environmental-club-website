import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
	typography: {
		h3: {
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "bold",
			fontSize: "24px",
			color: "#000000",
			textAlign: "center",
			padding: "0 50px 50px 0"
		},
		h2: {
			fontSize: "21px",
			fontWeight: "250",
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "normal",
			lineHeight: "25px",
			textAlign: "center",
			color: "white"
		},
		body1: {
			marginLeft: "50px",
			marginTop: "100px",
			width: "573px",
			height: "99px",
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "normal",
			fontSize: "24px",
			lineHeight: "28px",
			color: "#000000"
		},
		h4: {
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "bold",
			fontSize: "24px",
			lineHeight: "28px",
			color: "#000000",
			padding: "40px 0px"
		},
		h5: {
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "normal",
			fontSize: "24px",
			lineHeight: "28px",
			color: "#000000"
		},
		h1: {
			flexGrow: 1
		},
		subtitle1: {
			width: "420px",
			height: "25px",
			left: "285px",
			top: "36px",
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "normal",
			fontSize: "31px",
			lineHeight: "25px",
			color: "black",
			textAlign: "center",
			flexGrow: "1"
		},
		body2: {
			height: "140px",
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "normal",
			fontSize: "24px",
			lineHeight: "28px",
			color: "#000000"
		},
		h6: {
			height: "50px",
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "bold",
			fontSize: "24px",
			lineHeight: "28px",
			color: "#000000"
		},
		subtitle2: {
			paddingLeft: "148px",
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "normal",
			fontSize: "40px",
			lineHeight: "8",
			color: "#000000"
		}
	}
});
