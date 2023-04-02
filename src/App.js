import { useState } from 'react';
import Header from './components/header/Header';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';
import CharInfo from './components/charInfo/CharInfo';
import ComicList from './components/comicList/ComicList';
import Banner from './components/banner/Banner'

import decoration from './assets/img/vision.png';

const App = () => {
    const [selectedChar, setSelectedChar] = useState(null);    
    
    const onCharSelected = (id) => {
        setSelectedChar(id)
    }

    return (
        <div className="app">
                <Header />
                <main>
                    {/* <RandomChar />
                        <div className="char__content">
                                <CharList onCharSelected={onCharSelected} />
                                <CharInfo charId ={selectedChar}/>
                        </div>
                        <img className="bg-decoration" src={decoration} alt="vision"/> */}
                    <ComicList />
                    <Banner />
                </main>
        </div>
    );
}

export default App;
