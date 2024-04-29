import logo1 from '../../assets/img-01.png'
import logo2 from '../../assets/img-02.png'
import logo3 from '../../assets/img-03.png'
import logo4 from '../../assets/img-04.png'
import "./Partners.css"


const Partners = () => {
    return (
        <div className="partnerimg partner">
            <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-0 md:gap-10 lg:gap-14'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
            </div>
        </div>
    );
};

export default Partners;