import Countries from "../../components/Countries/Countries";
import Guides from "../../components/Guides/Guides";
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
           <Guides></Guides> 
        </div>
    );
};

export default Home;