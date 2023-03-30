import { Component } from 'react';
import Header from './components/header/Header';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';
import CharInfo from './components/charInfo/CharInfo';
import ComicList from './components/comicList/ComicList'

import decoration from './assets/img/vision.png';

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                    <Header />
                    <main>
                        <RandomChar />
                            <div className="char__content">
                                    <CharList onCharSelected={this.onCharSelected} />
                                    <CharInfo charId ={this.state.selectedChar}/>
                            </div>
                            <img className="bg-decoration" src={decoration} alt="vision"/>
                    </main>
            </div>
        );
    }
}

export default App;
