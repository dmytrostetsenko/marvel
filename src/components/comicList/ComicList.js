import uw from '../../assets/img/UW.png';
import xmen from '../../assets/img/x-men.png';
import './comicList.scss'

const ComicList = () => {
    return ( 
        <div class="comics__list">
                <ul class="comics__grid">
                    <li class="comics__item">
                        <a href="#">
                            <img src={uw} alt="ultimate war" class="comics__item-img" />
                            <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                            <div class="comics__item-price">9.99$</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src={xmen} alt="x-men" class="comics__item-img" />
                            <div class="comics__item-name">X-Men: Days of Future Past</div>
                            <div class="comics__item-price">NOT AVAILABLE</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src={uw} alt="ultimate war" class="comics__item-img" />
                            <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                            <div class="comics__item-price">9.99$</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src={xmen} alt="x-men" class="comics__item-img" />
                            <div class="comics__item-name">X-Men: Days of Future Past</div>
                            <div class="comics__item-price">NOT AVAILABLE</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src={uw} alt="ultimate war" class="comics__item-img" />
                            <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                            <div class="comics__item-price">9.99$</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src={xmen} alt="x-men" class="comics__item-img" />
                            <div class="comics__item-name">X-Men: Days of Future Past</div>
                            <div class="comics__item-price">NOT AVAILABLE</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src={uw} alt="ultimate war" class="comics__item-img" />
                            <div class="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
                            <div class="comics__item-price">9.99$</div>
                        </a>
                    </li>
                    <li class="comics__item">
                        <a href="#">
                            <img src={xmen} alt="x-men" class="comics__item-img" />
                            <div class="comics__item-name">X-Men: Days of Future Past</div>
                            <div class="comics__item-price">NOT AVAILABLE</div>
                        </a>
                    </li>
                </ul>
                <button class="button button__main button__long">
                    <div class="inner">load more</div>
                </button>
            </div>
     );
}
 
export default ComicList;