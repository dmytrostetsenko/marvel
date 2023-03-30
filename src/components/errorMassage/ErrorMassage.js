import error from './error.gif'
import './error.scss'

const ErrorMassage = () => {
    return (
        <img className='error' src={error} alt="Error" />
    )
}

export default ErrorMassage;