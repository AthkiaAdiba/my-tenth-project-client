import { useEffect, useState } from "react";
import Guide from "../Guide/Guide";


const Guides = () => {
    const [guides, setGuides] = useState([]);
    console.log(guides)

    useEffect(() => {
        fetch('https://my-tenth-project-server.vercel.app/guides')
            .then(res => res.json())
            .then(data => setGuides(data))
    }, [])
    return (
        <div className="mx-[5%] mt-24 lg:mt-44 mb-20">
            <p className="tracking-[10px] text-[#2095AE] font-barlow mb-4 text-lg">EXPLORE THE WORLD</p>
            <h2 className="text-6xl font-bold mb-10 leading-normal"><span className="text-[#0f2454] dark:text-white">MEET OUR</span> <span className="text-[#2095AE]">GUIDERS</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    guides.map(guide => <Guide key={guide._id} guide={guide}></Guide>)
                }
            </div>
        </div>
    );
};

export default Guides;