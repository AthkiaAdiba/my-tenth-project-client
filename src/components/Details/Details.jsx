import { useLoaderData } from "react-router-dom";


const Details = () => {
    const spot = useLoaderData();
    const { countryName, spotName, location, cost, season, photo, travelTime, visitors, description, userEmail, userName } = spot;
    console.log(spot)
    return (
        <div className="mt-28 lg:mt-44 mb-20 mx-[3%] lg:mx-[20%]">
            <div className="shadow-md">
                <img src={photo} alt="" className="object-cover object-center w-full bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-semibold tracking-wide text-[#0f2454] font-roboto">{spotName}</h2>
                        <p className="font-poppins text-xl font-medium">{description}</p>
                        {/* first row */}
                        <div className='flex flex-col md:flex-row lg:flex-row justify-between gap-6 lg:gap-0 font-poppins text-lg font-medium'>
                            <div className="space-y-3">
                                <p><span className="text-[#0f2454] text-xl">Average Cost:</span> {cost}$</p>
                                <p><span className="text-[#0f2454] text-xl">Season:</span> {season}</p>
                                <p><span className="text-[#0f2454] text-xl">Country Name:</span> {countryName}</p>
                                <p><span className="text-[#0f2454] text-xl">User Name:</span> {userName}</p>
                            </div>
                            <div className="space-y-3">
                                <p><span className="text-[#0f2454] text-xl">Visitors:</span> {visitors} Per Year</p>
                                <p><span className="text-[#0f2454] text-xl">Travel Time:</span> {travelTime}</p>
                                <p><span className="text-[#0f2454] text-xl">Location:</span> {location}</p>
                                <p><span className="text-[#0f2454] text-xl">User Email:</span> {userEmail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;