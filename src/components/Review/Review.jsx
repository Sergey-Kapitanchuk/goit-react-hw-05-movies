import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loader from "components/Loader/Loader";
import { Api } from "Services/Api";
const api = new Api();

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loader, setLoader] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoader(true);
        try {
            api.fetchReviews(movieId)
                .then(data => {
                    setReviews(data);
                })
        } catch (error) {
            console.log(error);
        }
        setLoader(false);
    }, [movieId]);

    return (
        <>
            {loader
                ? <Loader />
                : (<ul>
                    {reviews.length === 0
                        ? <div>No reviews yet...</div>
                        : reviews.map(el => {
                            return (
                                <li key={el.id}>
                                    <p b>{el.author}:</p>
                                    <p>{el.content}</p>
                                </li>)
                        })}
                </ul>)}
        </>
    )
};

export default Reviews;