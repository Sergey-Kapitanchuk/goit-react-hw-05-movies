import { useState, useEffect } from "react";
import { useParams, useLocation, NavLink, Outlet } from "react-router-dom";
import { Api } from "Services/Api";
import notImages from '../../Image/unnamed.png'
import CSS from './Details.module.css'

const api = new Api();

const Details = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        try {
            api.fetchDetails(movieId).then(data => {
                data.poster_path
                    ? (data.poster_path = `https://www.themoviedb.org/t/p/w440_and_h660_face/${data.poster_path}`)
                    : (data.poster_path = notImages);
                setMovie(data);
            });
        } catch (error) {
            console.log(error);
        }
    }, [movieId])


    return (
        <>
            {movie && (<div>
                <NavLink to={location.state?.from ?? "/"}> Go back</NavLink>
                <br />
                <div className={CSS.details}>
                    <img src={movie.poster_path} alt="movie poster" className={CSS.img} />
                    <div className={CSS.detailsList}>
                        <h1>{movie.title}</h1>
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                        <h3>Genres</h3>
                        <ul>
                            {movie.genres.map(e => {
                                return <li key={e.id}>{e.name}</li>
                            })}
                        </ul>
                    </div>
                </div>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <NavLink to="cast">Cast</NavLink>
                    </li>
                    <li>
                        <NavLink to="reviews">Reviews</NavLink>
                    </li>
                </ul>
                <Outlet />
            </div>)};
        </>
    )
}

export default Details;