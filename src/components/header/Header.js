import { Link, NavLink } from 'react-router-dom';
import Menu from '../menu/Menu';

import './header.scss'

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <h1 className="header__title">
                        <Link to='/'>
                            Marvel
                        </Link>
                    </h1>
                    <nav className="app__menu">
                        <Menu />
                    </nav>
                </div>
            </div>
        </header>
     );
}
 
export default Header;