import MoviesItem from './MoviesItem';
import CSS from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
    return (
        <ul className={CSS.moviesList}>
            {movies.map(movie => {
                return (<MoviesItem key={movie.id} movie={movie} />)
            })}
        </ul>
    )
};

export default MoviesList;