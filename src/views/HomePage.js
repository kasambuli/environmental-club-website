import Header from '../components/Header'
import Image from '../components/Image'
import Section from '../components/Section'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
const HomePage = () => {
    return (
        <div>
            <Header />
            <Image src="https://via.placeholder.com/150" text="ZANZIBAR SPICE TOUR" />
            <Image src="https://via.placeholder.com/150" text="SLAVE TRADE TOUR" />
            <Image src="https://via.placeholder.com/150" text="MWALIMU NYERERE TOUR" />
            <Image src="https://via.placeholder.com/150" text="KIGALI REMEMBERANCE TOUR" />
            <Section title="About" content="This is an about section" text="View More" src="https://via.placeholder.com/150" />
            <Section title="Programmes" content="This is a programmes section" text="View More" src="https://via.placeholder.com/150" />
            <Section title="Registration" content="This is a registration section" text="Register" src="https://via.placeholder.com/150" />
            <Carousel src="https://via.placeholder.com/150" content="This is a testimonial" />
            <div className="partners">
                <h3>Our Partners</h3>
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
            </div>
            <Footer />

        </div>
    )
}

export default HomePage
