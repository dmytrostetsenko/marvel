import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import ErrorMassage from '../errorMassage/ErrorMassage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss'

class CharInfo extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    };

    marvelService = new MarvelService();

    updateChar = () =>{
        const {charId} = this.props;
        if(!charId){
            return;
        }
        this.onCharLoading();
        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onCharError);
    }
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
    componentDidMount(){
        this.updateChar();
    }
    componentDidUpdate(prevProps){
        if(this.props.charId !== prevProps.charId){
            this.updateChar();
        }
    }

    render() {
        const skeleton = this.state.error || this.state.loading || this.state.char ? null : <Skeleton />
        const errorMassage = this.state.error ? <ErrorMassage /> : null;
        const spinner = this.state.loading ? <Spinner /> : null;
        const content = !(this.state.error || this.state.loading || !this.state.char) ? <View char={this.state.char} /> : null;
        return ( 
            <div className="char__info">
                {skeleton}
                {errorMassage}
                {spinner}
                {content}
            </div>
         );
    }
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