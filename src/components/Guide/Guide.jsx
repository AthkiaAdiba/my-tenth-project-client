import PropTypes from 'prop-types';

const Guide = ({ guide }) => {
    const { name, profession, description, image } = guide;
    return (
        <div className='flex flex-grow'>
            <div className="shadow-md">
                <img src={image} alt="" className="object-cover object-center w-full h-96 md:h-[500px] lg:h-[500px] bg-gray-500" />
                <div className='py-7 px-4'>
                    <h2 className="text-2xl font-semibold tracking-wide text-[#0f2454] dark:text-white font-roboto">{name}</h2>
                    <h3 className='mb-4 text-xl text-[#2095AE] font-semibold'>{profession}</h3>
                    <p className="font-poppins dark:text-white text-lg font-normal">{description}</p>
                </div>
            </div>
        </div>
    );
};

Guide.propTypes = {
    guide: PropTypes.object
}

export default Guide;