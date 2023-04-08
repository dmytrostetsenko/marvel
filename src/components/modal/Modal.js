import './modal.scss'
const Modal = ({showModal, setShowModal, children}) => {
    const closeModal = () => {
        setShowModal(false);
    }
    return(
        <div className={showModal ? 'modal modal_active' : 'modal'} onClick={closeModal}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;