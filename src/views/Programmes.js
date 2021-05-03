import Header from '../components/Header'
import Buttons from '../components/Buttons'
import Footer from '../components/Footer'
import Program from '../components/Program'
const Programmes = () => {
    return (
        <div>
            <Header />
            <p>Programmes</p>
            <video width="750" height="500" controls >
                <source src="#" type="video/mp4" />
            </video>
            <p>Teext</p>
            <Program content="Lorem Ipsum" />
            <Program content="Lorem Ipsum" />
            <Program content="Lorem Ipsum" />
            <Program content="Lorem Ipsum" />
            <Program content="Lorem Ipsum" />
            <h3>Program Activities</h3>
            <ul>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <li>
                    Activity here
                </li>
                <div className="join">
                    <h3>Why join?</h3>
                    <p>Lorem Ipsum</p>
                    <Buttons text="Register" />
                </div>
                <Footer />

            </ul>
        </div>
    )
}

export default Programmes
