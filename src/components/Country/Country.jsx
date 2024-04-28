import PropTypes from 'prop-types';

const Country = ({ country }) => {
    const { image, countryName, shortDescription } = country;
    return (
        <div className='flex flex-grow'>
            <div className="shadow-md relative">
                <img src={image} alt="" className="object-cover object-center w-full h-96 md:h-[500px] lg:h-[500px] bg-gray-500" />
                <h2 className="absolute bottom-[40%] lg:bottom-[35%] left-6 p-3 bg-[#0f2454] text-3xl font-semibold tracking-wide text-white font-roboto">{countryName}</h2>
                <p className="py-10 px-4 font-poppins text-lg font-normal">{shortDescription}</p>
            </div>
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object
}

export default Country;