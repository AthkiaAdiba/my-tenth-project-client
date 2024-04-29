import Countries from "../../components/Countries/Countries";
import HomeTourists from "../../components/HomeTourists/HomeTourists";
import Partners from "../../components/Partners/Partners";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <Countries></Countries>
           <HomeTourists></HomeTourists>
           <Partners></Partners> 
        </div>
    );
};

export default Home;