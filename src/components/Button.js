const Button = ({ color, textColor, text }) => {
    return <button
        style={{ backgroundColor: color, color: textColor }}
        className='btn'>{text}</button>
}

Button.defaultProps = {
    color: 'black',
    textColor: 'white'
}
export default Button
