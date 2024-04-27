import { useEffect, useState } from "react";
import OneHomeTourist from "../OneHomeTourist/OneHomeTourist";

const HomeTourists = () => {
    const [homeTourists, setHomeTourists] = useState([]);
    console.log(homeTourists)

    useEffect(() => {
        fetch('http://localhost:5000/addSpot')
            .then(res => res.json())
            .then(data => setHomeTourists(data))
    }, [])
    return (
        <div className="mx-[5%] mt-28 lg:mt-44 mb-20">
            <p className="tracking-[10px] text-[#2095AE] font-barlow mb-6">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10"><span className="text-[#0f2454]">POPULAR</span> <span className="text-[#2095AE]">TOURS</span></h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    homeTourists.slice(0,6).map(tourist => <OneHomeTourist key={tourist._id} tourist={tourist}></OneHomeTourist>)
                }
            </div>
        </div>
    );
};

export default HomeTourists;