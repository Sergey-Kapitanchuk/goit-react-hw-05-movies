import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList'
import Loader from 'components/Loader/Loader';
import { Api } from 'Services/Api';
import CSS from './MoviesInput.module.css';
const api = new Api();

const Movies = () => {
    const [list, setList] = useState([]);
    const [loader, setLoader] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query');

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        setLoader(true);
        try {
            api.fetchMovies(searchQuery).then(data => {
                data.map(e => {
                    e.poster_path
                        && (e.poster_path = `https://www.themoviedb.org/t/p/w440_and_h660_face${e.poster_path}`)
                    return e;
                })
                setList(data);
            })
        } catch (error) {
            console.log(error);
        }
        setLoader(false);
    }, [searchQuery])

    const showMovies = e => {
        e.preventDefault();
        const searchValue = e.target.elements.searchQuery.value.trim();

        if (searchValue) {
            setSearchParams({ query: e.target.elements.searchQuery.value.trim() });
            e.target.reset();
        }
    }

    return (
        <>
            <form onSubmit={showMovies} className={CSS.form}>
                <input
                    placeholder="Search movies"
                    type="text"
                    name="searchQuery"
                    autoComplete="off"
                    className={CSS.input}
                />
                <button type="submit" className={CSS.button}>Search</button>
            </form>

            {loader
                ? <Loader />
                : (list.length === 0 ? <title>No movies yet...</title> : <MoviesList movies={list} />)}
        </>
    )
}

export default Movies;