import { useEffect, useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countriesData, setCountriesData] = useState([]);
    // console.log(countriesData)

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => setCountriesData(data))
    }, [])


    return (
        <div className="mx-[5%] mt-28 lg:mt-44 mb-20">
            <p className="tracking-[10px] text-[#2095AE] font-barlow mb-6 text-lg">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10 leading-normal"><span className="text-[#0f2454]">DISCOVER THE</span> <span className="text-[#2095AE]">WORLD</span> <br /><span className="text-[#0f2454]">WITH US</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    countriesData.map(country => <Country key={country._id} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;