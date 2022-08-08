import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import { Api } from "Services/Api";
import notImages from '../../Image/unnamed.png';

const api = new Api();



const Cast = () => {
    const [cast, serCast] = useState([]);
    const [loader, setLoader] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoader(true);
        try {
            api.fetchCast(movieId)
                .then(data => {
                    const castEl = data.map(e => {
                        e.profile_path
                            ? (e.profile_path = `https://www.themoviedb.org/t/p/w440_and_h660_face${e.profile_path}`)
                            : (e.profile_path = notImages)
                        return e;
                    });
                    serCast(castEl);
                });
        } catch (error) {
            console.log(error);
        };
        setLoader(false);
    }, [movieId]);

    return (
        <>
            {loader ? <Loader />
                : (<ul>
                    {cast.map(actor => {
                        return (
                            <li key={actor.id}>
                                <img src={actor.profile_path} alt="actor" width="150px" />
                                <h4>{actor.name}</h4>
                                <p>{actor.character}</p>
                            </li>
                        )
                    })}
                </ul>)
            }
        </>
    )
};

export default Cast;