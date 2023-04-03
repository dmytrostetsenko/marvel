import { useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMassage from '../errorMassage/ErrorMassage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss'
import { Link } from 'react-router-dom';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);


    const {loading, error, clearError, getCharacter} = MarvelService();

    const updateChar = () =>{
        const {charId} = props;
        if(!charId){
            return;
        }
        clearError();
        getCharacter(charId).then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char)
    }

    useEffect(() =>{
        updateChar();
    },[props.charId])

    const skeleton = error || loading || char ? null : <Skeleton />
    const errorMassage = error ? <ErrorMassage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading || !char) ? <View char={char} /> : null;
    return ( 
        <div className="char__info">
            {skeleton}
            {errorMassage}
            {spinner}
            {content}
        </div>
     );
}

const View = ({char}) => {
    return (
        <>
            <div className="char__basics">
                <img src={char.thumbnail} alt={char.name}/>
                <div>
                    <div className="char__info-name">{char.name}</div>
                    <div className="char__btns">
                        <a href={char.homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={char.wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {char.description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {char.comics.length > 0 ? null : 'There is no comics with this character'}
                {char.comics.map((item, i) => {
                    if(i > 9) return;
                    const comicId = item.resourceURI.slice(item.resourceURI.lastIndexOf('/') + 1)
                    return (
                        <Link to={`/comics/${comicId}`} className="char__comics-item" key={i}>
                            {item.name}
                        </Link>
                    )
                })}
            </ul>
        </>
    )
}
 
export default CharInfo;