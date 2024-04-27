import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OneHomeTourist = ({tourist}) => {
    const { _id, spotName, photo, description } = tourist;
    return (
        <div className='flex flex-grow'>
            <div className="shadow-md">
                <img src={photo} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide text-[#0f2454] font-roboto">{spotName}</h2>
                        <p className="font-poppins text-lg font-normal">{description}</p>
                    </div>
                    <Link to={`/addSpot/${_id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#0f2454] text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

OneHomeTourist.propTypes = {
    tourist: PropTypes.object
}

export default OneHomeTourist;