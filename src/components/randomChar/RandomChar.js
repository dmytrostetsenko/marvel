import { useState, useEffect } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import mjolnir from '../../assets/img/mjolnir.png'
import './randomChar.scss'
import ErrorMassage from '../errorMassage/ErrorMassage';

const RandomChar = () => {
    const [char, setChar] = useState({});
    const {loading, error, clearError, getCharacter} = MarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }
    const updateChar = () => {
        clearError();
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        getCharacter(id).then(onCharLoaded)
    }

    useEffect(() => {
        updateChar();
        // const intervalId = setInterval(updateChar, 10000)
        // return () => {
        //     clearInterval(intervalId)
        // }
    }, [])

    const errorMassage = error ? <ErrorMassage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading) ? <View char={char} /> : null;
    return ( 
        <div className="randomchar">
            {errorMassage}
            {spinner}
            {content}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main" onClick={updateChar}>
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
     );
}

const View = ({char}) =>{
    return(
        <div className="randomchar__block">
            <img src={char.thumbnail} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{char.name}</p>
                <p className="randomchar__descr">
                    {char.description}
                </p>
                <div className="randomchar__btns">
                    <a href={char.homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={char.wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}
 
export default RandomChar;