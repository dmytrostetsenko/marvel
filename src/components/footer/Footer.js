import Socials from "../socials/Socials";
import './footer.scss';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <p className="footer__text"> &copy; Created by Dmytro Stetsenko {new Date().getFullYear()}</p>
                    <Socials />
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;