import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CountriesCards = ({ oneSpot }) => {
    const { _id, spotName, cost, season, countryName, location, description } = oneSpot;
    return (
        <div className='flex flex-grow'>
            <div className="shadow-md">
                {/* <img src={photo} alt="" className="object-cover object-center w-full h-72 bg-gray-500" /> */}
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-semibold tracking-wide text-[#0f2454] font-roboto">{spotName}</h2>
                        {/* first row */}
                        <div className='flex flex-col space-y-3 lg:space-y-0 lg:flex-row justify-between font-poppins text-xl font-medium'>
                            <div>
                                <p>{countryName}</p>
                            </div>
                            <div> 
                                <p>{location}</p>
                            </div>
                        </div>
                        {/* second row */}
                        <div className='flex justify-between items-center font-poppins text-xl font-medium'>
                            <div>
                                <p>{cost}$</p>
                            </div>
                            <div>
                                <p>{season}</p>
                            </div>
                        </div>
                        <p className="font-poppins text-lg font-medium">{description}</p>
                    </div>
                    <Link to={`/addSpot/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#0f2454] text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

CountriesCards.propTypes = {
    oneSpot: PropTypes.object
}

export default CountriesCards;