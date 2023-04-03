import { Link, NavLink } from 'react-router-dom';

import './header.scss'

const Header = () => {
    return ( 
        <header className="app__header">
            <h1 className="app__title">
                <Link to='/'>
                    <span>Marvel</span>
                    information portal
                </Link>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><NavLink className={({isActive}) => isActive ? 'app__menu-link_active' : null } to='/'>Characters</NavLink></li>
                    /
                    <li><NavLink className={({isActive}) => isActive ? 'app__menu-link_active' : null } to='comics'>Comics</NavLink></li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;