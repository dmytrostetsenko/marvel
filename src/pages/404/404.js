import ErrorMassage from "../../components/errorMassage/ErrorMassage";
import { Link } from "react-router-dom";
import './404.scss'

const Page404 = () => {
    return ( 
        <div>
            <ErrorMassage />
            <p className="error-page">Page doesn't exist</p>
            <Link to='/' className="error-page__link">Back to home page</Link>
        </div>
     );
}
 
export default Page404;