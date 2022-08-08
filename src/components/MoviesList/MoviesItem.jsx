import { useNavigate, useLocation } from 'react-router-dom';
import CSS from './MoviesItem.module.css';

const MoviesItem = ({ movie }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const onItemClick = (id) => {
        navigate(`/movies/${id}`, { state: { from: location } })
    };

    return (
        <li className={CSS.moviesItem} onClick={() => onItemClick(movie.id)}>
            <img src={movie.poster_path} alt="movie poster" />
            <h4>{movie.title}</h4>
        </li>
    )
};

export default MoviesItem;