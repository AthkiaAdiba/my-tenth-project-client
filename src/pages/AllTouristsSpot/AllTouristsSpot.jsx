import { useLoaderData } from "react-router-dom";
import Spot from "../../components/Spot/Spot";

const AllTouristsSpot = () => {
    const allSpots = useLoaderData();
    console.log(allSpots)
    return (
        <div className="mx-[5%] mt-28 lg:mt-44 mb-20">
            <p className="tracking-[10px] text-[#2095AE] font-barlow mb-6">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10"><span className="text-[#0f2454]">POPULAR</span> <span className="text-[#2095AE]">TOURS</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    allSpots.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;