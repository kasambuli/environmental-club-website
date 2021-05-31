import "./App.css";
import Programmes from "./views/Programmes";
import HomePage from "./views/HomePage";
import SignIn from "./views/Authentication/SignIn";
import Registration from "./views/Authentication/Registration";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<div className="container">
			<Router>
				<Switch>
					<Route component={SignIn} path={'/signin'} exact />
					<Route component={Registration} path={'/register'} exact />
					<Route component={HomePage} path={'/'} exact />
					<Route component={Programmes} path={'/programmes'} exact />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
