import { useState, useEffect } from "react";
import { Api } from "Services/Api";
import MoviesList from "components/MoviesList/MoviesList";
import Loader from "components/Loader/Loader";

const api = new Api();

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        try {
            api.fetchTrending()
                .then(data => {
                    data.map(e => {
                        e.poster_path ?
                            (e.poster_path = `https://www.themoviedb.org/t/p/w440_and_h660_face${e.poster_path}`)
                            : (e.poster_path = <div>hello</div>)
                        return e;
                    });
                    setMovies(data);
                });
        } catch (error) {
            console.log(error);
        };
        setLoader(false);
    }, []);

    return (
        <>
            {loader ? <Loader />
                : (<div>
                    <h1>Trending today</h1>
                    <MoviesList movies={movies} />
                </div>)}
        </>
    )
};
export default Home;