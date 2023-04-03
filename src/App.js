import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import ComicsPage from './pages/comicsPage/ComicsPage';
import SingleComicPage from './pages/singleComicPage/SingleComicPage';
import HomePage from './pages/homePage/HomePage';
import Page404 from './pages/404/404';


const App = () => {
    return (
        <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='comics' element ={<ComicsPage />} />
                        <Route path='comics/:comicId' element={<SingleComicPage />} />
                        <Route path='*' element={<Page404 />} />
                    </Routes>
                </main>
        </div>
    );
}

export default App;
