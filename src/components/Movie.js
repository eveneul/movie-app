import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ title, coverImg, summary, genres, id }) {
	return (
		<div className='movie'>
			<h2 className='movie-title'>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<div className='img-box'>
				<img src={coverImg} alt={title} />
			</div>
			<div className='content'>
				<ul className='genres'>
					{genres.map((g) => (
						<li key={g}>{g}</li>
					))}
				</ul>
				<p className='summary'>{summary}</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	id: PropTypes.number.isRequired,
};

export default Movie;
