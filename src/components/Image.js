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
	height: PropTypes.object.isRequired,
	width: PropTypes.object.isRequired,
	text: PropTypes.object.isRequired,
	src: PropTypes.object.isRequired,
}

export default Image;
