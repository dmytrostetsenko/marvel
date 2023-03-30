import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';
import './charList.scss'


class CharList extends Component {
    state = {
        chars: [],
        loading: true,
        error: false
    }
    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService.getAllCharacters()
            .then(this.onCharsLoaded)
            .catch(this.onError)
    }

    onCharsLoaded = (chars) => {
        this.setState({
            chars,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    charRender (array) {
        const chars = array.map(item => {
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                imgStyle = {'objectFit' : 'unset'};
            }
            
            return (
                <li 
                    className="char__item"
                    key={item.id}>
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

    render () {
        const chars = this.charRender(this.state.chars);
        const errorMessage = this.state.error ? <ErrorMassage/> : null;
        const spinner = this.state.loading ? <Spinner/> : null;
        const content = !(this.state.error || this.state.loading) ? chars : null;
        return (
            <div className="char__list">
                {content}
                {spinner}
                {errorMessage}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
         );
    }
}
 
export default CharList;