import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import Banner from '../../components/banner/Banner';
import './singleComicPage.scss'
import setContent from '../../utils/setContent';

const SingleComicPage = () => {
    const {comicId} = useParams();
    const [comic, setComic] = useState(null);

    const {process, setProcess, clearError, getComic} = MarvelService();

    const updateComic = () =>{
        clearError();
        getComic(comicId)
            .then(onComicLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onComicLoaded = (comic) => {
        setComic(comic)
    }

    useEffect(() =>{
        updateComic();
    },[comicId])


    return ( 
        <section>
            <div className="container">
                <div>
                    <Banner />
                    {setContent(process, View, comic)}
                </div>
            </div>
        </section>
     );
}
const View = ({data}) => {
    const {title, description, pages, thumbnail, language, price} = data;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pages}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">Price: {price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}
 
export default SingleComicPage;