import Header from '../../components/Header'
// import Button from '../../components/Button'
import Buttons from '../../components/Buttons'
import Image from '../../components/Image'
import Footer from '../../components/Footer'
const SignIn = () => {
    return (
        <div>
            <Header />
            <form>
                <input type="text" placeholder="Email Address" />
                <input type="text" placeholder="Create Password" />
                <Buttons text="Sign In" />
                <a href="#">Forgot Password?</a>|<a href="#">Register</a>
            </form>
            <Image src="https://via.placeholder.com/150" />
            <Footer />
        </div>
    )
}

export default SignIn
