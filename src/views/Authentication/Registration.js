import Header from "../../components/Header";
import Button from "../../components/Buttons";
import Image from "../../components/Image";
import Footer from "../../components/Footer";
const Registration = () => {
	return (
		<div>
			<Header />
			<form>
				<input type="text" placeholder="Username" />
				<input type="text" placeholder="Email Address" />
				<input type="text" placeholder="Create Password" />
				<input type="text" placeholder="Confirm Password" />
				<Button text="Register" />
				<a href="#">Sign In</a>
			</form>
			<Image src="https://via.placeholder.com/150" />
			<Footer />
		</div>
	);
};

export default Registration;
