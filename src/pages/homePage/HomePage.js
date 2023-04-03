import { useState } from 'react';

import RandomChar from '../../components/randomChar/RandomChar';
import CharList from '../../components/charList/CharList';
import CharInfo from '../../components/charInfo/CharInfo';

import decoration from '../../assets/img/vision.png';


const HomePage = () => {
    const [selectedChar, setSelectedChar] = useState(null);    
    
    const onCharSelected = (id) => {
        setSelectedChar(id)
    }
    
    return ( 
        <>
            <RandomChar />
            <div className="char__content">
                    <CharList onCharSelected={onCharSelected} />
                    <CharInfo charId ={selectedChar}/>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
     );
}
 
export default HomePage;