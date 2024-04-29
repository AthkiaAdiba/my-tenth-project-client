import { useLoaderData } from "react-router-dom";
import Spot from "../../components/Spot/Spot";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const AllTouristsSpot = () => {
    const allSpots = useLoaderData();
    const [sortingSpots, setSortingSpots] = useState(allSpots)
    console.log(allSpots)

    const handleSorting = sortText => {

        if (sortText === 'cost') {
            const sortedSpots = allSpots.sort((a, b) => {
                return b.cost - a.cost;
            });
            setSortingSpots([...sortedSpots]);

        }
    }

    return (
        <div className="mx-[5%] mt-28 lg:mt-44 mb-20">
            {/* dropdown */}
            <div className="text-center">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#0f2454] text-white">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                        <li onClick={() => handleSorting('cost')} className="hover:bg-[#0f2454] hover:text-white rounded-lg"><a>Average Cost</a></li>
                    </ul>
                </details>
            </div>
            <p className="tracking-[10px] text-[#2095AE] font-barlow mb-6">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10"><span className="text-[#0f2454]">POPULAR</span> <span className="text-[#2095AE]">TOURS</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    sortingSpots.map(spot => <Spot key={spot._id} spot={spot}></Spot>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;