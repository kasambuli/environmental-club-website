import PropTypes from 'prop-types'

const Image = ({ height, width, text, src }) => {
	return (
		<>
			<img src={src} alt={text} style={{ height: height, width: width }}></img>
			<p>{text}</p>
		</>
	);
};

Image.propTypes = {
	height: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
}

export default Image;
