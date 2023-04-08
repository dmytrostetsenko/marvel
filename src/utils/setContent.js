import Spinner from '../components/spinner/Spinner';
import ErrorMassage from '../components/errorMassage/ErrorMassage';
import Skeleton from '../components/skeleton/Skeleton';

const setContent = (process, Component, data) => {
    switch (process) {
        case 'waiting':
            return <Skeleton/>;
        case 'loading':
            return <Spinner/>;
        case 'confirmed':
            return <Component data={data}/>;
        case 'error':
            return <ErrorMassage/>;
    }
}

export default setContent;