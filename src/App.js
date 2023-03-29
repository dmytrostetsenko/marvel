import Header from './components/header/Header';
import RandomChar from './components/randomChar/RandomChar';
import CharList from './components/charList/CharList';
import CharInfo from './components/charInfo/CharInfo';
import ComicList from './components/comicList/ComicList'

import decoration from './assets/img/vision.png';

function App() {
  return (
    <div className="app">
    <Header />
    <main>
      <RandomChar />
        <div className="char__content">
            <CharList />
            <CharInfo />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision"/>
    </main>
</div>
  );
}

export default App;
