import avengers from '../../assets/img/Avengers.png';
import avengersLogo from '../../assets/img/Avengers_logo.png';
import './banner.scss'

const Banner = () => {
    return ( 
        <div class="app__banner">
            <img src={avengers} alt="Avengers" />
            <div class="app__banner-text">
                New comics every week!<br />
                Stay tuned!
            </div>
            <img src={avengersLogo} alt="Avengers logo" />
        </div>
     );
}
 
export default Banner;