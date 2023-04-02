import { useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMassage from '../errorMassage/ErrorMassage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss'

const CharInfo = (props) => {

    const [char, setChar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const marvelService = new MarvelService();

    const updateChar = () =>{
        const {charId} = props;
        if(!charId){
            return;
        }
        onCharLoading();
        marvelService
            .getCharacter(charId)
            .then(onCharLoaded)
            .catch(onCharError);
    }
    useEffect(() =>{
        updateChar();
    },[props.charId])
    const onCharLoaded = (char) => {
        setChar(char)
        setLoading(false)
    }
   const onCharLoading = () => {
        setLoading(true);
    }

    const onCharError = () => {
        setLoading(false);
        setError(true)
    }

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
                    return (
                        <li className="char__comics-item" key={i}>
                            {item.name}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
 
export default CharInfo;