import { useState } from "react";
import { NavLink } from "react-router-dom";

import './menu.scss'

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        document.body.classList.add('_lock')
        setIsMenuOpen(!isMenuOpen)
    }
    const closeMenu = () =>{
        document.body.classList.remove('_lock')
        setIsMenuOpen(false)
    }
    return ( 
        <>
            <div 
            className={isMenuOpen ? 'burger burger_open' : 'burger'} 
            onClick={openMenu}
            >
                <span></span>
            </div>
            <div 
                onClick={closeMenu}
                className={isMenuOpen ? 'menu menu_open' : 'menu'}
            >
                <div className="menu__content" onClick={(e) => e.stopPropagation()}>
                    <ul className='menu__list'>
                        <li>
                            <NavLink 
                                className={({isActive}) => isActive ? 'menu__link_active' : 'menu__link' } 
                                to='/'
                                onClick={closeMenu}
                            >
                                Characters
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                className={({isActive}) => isActive ? 'menu__link_active' : 'menu__link' } 
                                to='comics'
                                onClick={closeMenu}
                            >
                                Comics
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
     );
}
 
export default Menu;