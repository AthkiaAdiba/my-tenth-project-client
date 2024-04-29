import { useEffect, useState } from "react";
import Country from "../Country/Country";
import { Typewriter } from 'react-simple-typewriter'



const Countries = () => {
    const [countriesData, setCountriesData] = useState([]);
    // console.log(countriesData)

    useEffect(() => {
        fetch('https://my-tenth-project-server.vercel.app/countries')
            .then(res => res.json())
            .then(data => setCountriesData(data))
    }, [])


    return (
        <div className="mx-[5%] mt-28 lg:mt-44 mb-20">
            <p className="tracking-[10px] text-[#2095AE] font-barlow mb-6 text-lg">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10 leading-normal"><span className="text-[#0f2454] dark:text-white">
                <Typewriter
                    words={['DISCOVER THE', 'DISCOVER THE', 'DISCOVER THE', 'DISCOVER THE']}
                    loop={5}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                />

            </span> <span className="text-[#2095AE]">WORLD</span> <br /><span className="text-[#0f2454] dark:text-white">WITH US</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    countriesData.map(country => <Country key={country._id} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;