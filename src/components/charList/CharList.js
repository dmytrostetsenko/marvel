import { useState, useEffect, useRef } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';
import './charList.scss'


const CharList = (props) => {
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);

    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest();
    }, [])


    const onRequest = (offset) => {
        onCharsLoading();
        marvelService.getAllCharacters(offset)
        .then(onCharsLoaded)
        .catch(onError)
    }
    
    const onCharsLoading = () => {
        setNewItemLoading(true)
    }

    const onCharsLoaded = (newChars) => {
        setChars(chars => [...chars, ...newChars]);
        setLoading(false);
        setNewItemLoading(false);
        setOffset(offset => offset + 9);
    }

    const onError = () => {
        setLoading(false);
        setError(true)
    }

     const itemRefs = useRef([])
        
    const onFocusChar = (id) =>{
        itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
        itemRefs.current[id].classList.add('char__item_selected');
    }

    function charRender (array) {
        const chars = array.map((item, i) => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    key={item.id}
                    ref={el => itemRefs.current[i] = el}
                    onClick={() => {
                        props.onCharSelected(item.id)
                        onFocusChar(i)
                    }}
                >
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            );
        });
        return (
            <ul className="char__grid">
                {chars}
            </ul>
        )
    }

    const items = charRender(chars);
    const errorMessage = error ? <ErrorMassage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(error || loading) ? items : null;
    return (
        <div className="char__list">
            {content}
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
 
export default CharList;