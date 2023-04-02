import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';

import './comicList.scss'

const ComicList = () => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(210);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const {loading, error, getAllComics} = MarvelService();

    const onComicsLoaded = (newComics) => {
        setComics(comics => [...comics, ...newComics]);
        setOffset(offset => offset + 8)
        setNewItemLoading(false)
    }

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset).then(onComicsLoaded)
    }

    useEffect(() =>{
        onRequest(offset, true)
    },[])

    const renderComics = (array) => {
        const comics = array.map((item) => {
            return (
                <li className="comics__item" key={item.id}>
                    <a href="#">
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img" />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a>
                </li>
            )
        })
        return (
            <ul className="comics__grid">
                {comics}
            </ul>
        )
    }

    const items = renderComics(comics);
    const errorMessage = error ? <ErrorMassage/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;
    return ( 
        <div className="comics__list">
                {items}
                {spinner}
                {errorMessage}
                <button 
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    onClick={() => onRequest(offset)}
                >
                    <div className="inner">load more</div>
                </button>
            </div>
     );
}
 
export default ComicList;