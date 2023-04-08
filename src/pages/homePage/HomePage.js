import { useState } from 'react';

import RandomChar from '../../components/randomChar/RandomChar';
import CharList from '../../components/charList/CharList';
import CharInfo from '../../components/charInfo/CharInfo';
import Modal from '../../components/modal/Modal';
import CharSearchForm from '../../components/charSearchForm/CharSearchForm';
import decoration from '../../assets/img/vision.png';


const HomePage = () => {
    const [selectedChar, setSelectedChar] = useState(null);    
    const [showModal, setShowModal] = useState(false)
    const isLargeScreen = window.innerWidth > 1023.98;
    
    const onCharSelected = (id) => {
        setSelectedChar(id)
        setShowModal(true)
    }
    
    return ( 
        <>
            <RandomChar />
            <section className="char">
                <div className="container">
                    <div className="char__content">
                        <div className='char__block'>
                            <CharSearchForm onCharSelected={onCharSelected} />
                            <CharList onCharSelected={onCharSelected} isLargeScreen={isLargeScreen} />
                        </div>
                        {
                            isLargeScreen ? 
                            <CharInfo charId ={selectedChar}/> :
                            <Modal showModal={showModal} setShowModal={setShowModal}>
                                <CharInfo charId ={selectedChar} />
                            </Modal>
                        }
                    </div>
                </div>
            </section>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
     );
}
 
export default HomePage;