import { useLoaderData } from "react-router-dom";
import CountriesCards from "../../components/CountriesCards/CountriesCards";





const CountryWisePage = () => {
    const countryWiseSpots = useLoaderData();
    console.log(countryWiseSpots)
    return (
        <div className="mx-[5%] mt-28 lg:mt-44 mb-20">
            <p className="tracking-[10px] text-[#2095AE] font-barlow mb-6">CHOOSE YOUR PLACE</p>
            <h2 className="text-6xl font-bold mb-10"><span className="text-[#0f2454]">POPULAR</span> <span className="text-[#2095AE]">TOURS</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    countryWiseSpots.map(oneSpot => <CountriesCards key={oneSpot._id} oneSpot={oneSpot}></CountriesCards>)
                }
            </div>
        </div>
    );
};

export default CountryWisePage;