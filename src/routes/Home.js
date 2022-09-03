import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

function Home() {
	const [loading, setLoading] = useState(true);

	const [movies, setMovies] = useState([]);

	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=ylarge_cover_imageear`
			)
		).json();

		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<div>
			{loading ? (
				<div className='loading-area'>
					<span className='loading'>Loading...</span>
				</div>
			) : (
				<div className='movie-area'>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							coverImg={movie.large_cover_image}
							summary={movie.summary}
							genres={movie.genres}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
