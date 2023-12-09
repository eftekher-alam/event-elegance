
import OurServices from '../outServices/OurServices';
import Quality from '../quality/Quality';
import Reviews from '../reviews/Reviews';
import Banner from './../banner/Banner';
const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div >
                <Quality></Quality>
            </div>
            <div>
                <Reviews></Reviews>
            </div>
            <div>
                <OurServices></OurServices>
            </div>
        </div>
    );
};

export default Home;