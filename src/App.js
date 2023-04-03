import Header from './components/header/Header';
import ComicsPage from './pages/comicsPage/ComicsPage';
import HomePage from './pages/homePage/HomePage';


const App = () => {
    return (
        <div className="app">
                <Header />
                <main>
                    <HomePage />
                    <ComicsPage />
                </main>
        </div>
    );
}

export default App;
