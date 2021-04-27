import Image from './Image'
import Button from './Button'
const Section = ({ title, content, text, src }) => {
    return (
        <div>
            <Image src={src} />
            <h4>{title}</h4>
            <p>{content}</p>
            <Button text={text} />
        </div>
    )
}

export default Section
