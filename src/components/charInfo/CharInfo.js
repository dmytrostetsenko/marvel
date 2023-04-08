import { useEffect, useState } from 'react';
import MarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';
import './charInfo.scss'
import { Link } from 'react-router-dom';

const CharInfo = (props) => {

    const [char, setChar] = useState(null);


    const {process, setProcess, clearError, getCharacter} = MarvelService();

    const updateChar = () =>{
        const {charId} = props;
        if(!charId){
            return;
        }
        clearError();
        getCharacter(charId)
            .then(onCharLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCharLoaded = (char) => {
        setChar(char)
    }

    useEffect(() =>{
        updateChar();
    },[props.charId])

    return ( 
        <div className="char__info">
            {setContent(process, View, char)}
        </div>
     );
}

const View = ({data}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = data;
    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name}/>
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__info-btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : 'There is no comics with this character'}
                {comics.map((item, i) => {
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