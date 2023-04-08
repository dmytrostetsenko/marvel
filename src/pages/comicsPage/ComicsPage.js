import Banner from '../../components/banner/Banner';
import ComicList from '../../components/comicList/ComicList'

const ComicsPage = () => {
    return ( 
        <section>
            <div className="container">
                <div className="comics">
                    <Banner />
                    <ComicList />
                </div>
            </div>
        </section>
     );
}
 
export default ComicsPage;