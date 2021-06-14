const Image = ({ height, width, text, src }) => {
    return (
        <>
            <img src={src} alt={text} style={{ height: height, width: width }}></img>
            <p>{text}</p>
        </>
    )

}

export default Image
