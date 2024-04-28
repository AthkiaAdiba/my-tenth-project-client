import Countries from "../../components/Countries/Countries";
import HomeTourists from "../../components/HomeTourists/HomeTourists";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Countries></Countries>
           <HomeTourists></HomeTourists> 
        </div>
    );
};

export default Home;