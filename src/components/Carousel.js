import Image from './Image'
const Carousel = ({ src, content }) => {
    return (
        <div>
            <Image src={src} />
            <p>{content}</p>
        </div>
    )
}

export default Carousel
