import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';

import './comicList.scss'

const setContent = (process, Component, newItemLoading) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>;
        case 'loading':
            return newItemLoading ? <Component/> : <Spinner/>;
        case 'confirmed':
            return <Component/>;
        case 'error':
            return <ErrorMassage/>;
        default:
            throw new Error('Unexpected process state');
    }
}

const ComicList = () => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(210);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [comicsEnded, setComicsEnded] = useState(false);

    const {getAllComics, process, setProcess} = MarvelService();

    const onComicsLoaded = (newComics) => {
        let ended = false;
        if (newComics.length < 8) {
            ended = true;
        }
        setComics(comics => [...comics, ...newComics]);
        setOffset(offset => offset + 8)
        setNewItemLoading(false)
        setComicsEnded(ended);
    }

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset)
            .then(onComicsLoaded)
            .then(() => setProcess('confirmed'))
    }

    useEffect(() =>{
        onRequest(offset, true)
    },[])

    const renderComics = (array) => {
        const comics = array.map((item) => {
            return (
                <li className="comics__item" key={item.id}>
                    <Link to={`/comics/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img" />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </li>
            )
        })
        return (
            <ul className="comics__grid">
                {comics}
            </ul>
        )
    }


    return ( 
        <div className="comics__list">
            {setContent(process, () => renderComics(comics), newItemLoading)}
            <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                onClick={() => onRequest(offset)}
                style={{'display' : comicsEnded ? 'none' : 'block'}}
            >
                <div className="inner">load more</div>
            </button>
        </div>
     );
}
 
export default ComicList;