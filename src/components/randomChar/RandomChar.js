import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import mjolnir from '../../assets/img/mjolnir.png'
import './randomChar.scss'
import ErrorMassage from '../errorMassage/ErrorMassage';

class RandomChar extends Component{
    state = {
        char: {},
        loading: true,
        error: false
    };

    marvelService = new MarvelService();

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        });
    }
    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onCharError = () => {
        this.setState({
            loading: false,
            error: true
            })
    }
    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onCharError)
    }

    componentDidMount() {
        // this.updateChar();
    }


    render(){
        const errorMassage = this.state.error ? <ErrorMassage /> : null;
        const spinner = this.state.loading ? <Spinner /> : null;
        const content = !(this.state.error || this.state.loading) ? <View char={this.state.char} /> : null;
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
                    <button className="button button__main" onClick={this.updateChar}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
         );
    }
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