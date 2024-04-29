import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { login, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;

        // login user
        login(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('You have logged in successfully');
                reset();

                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
                toast.error('Password or Email does not match.');
                reset();
            })
    }


    // login with google
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success('You have logged in successfully');

            })
            .catch(error => {
                console.log(error)
            })
    }

    // login with Github
    const handleLoginWithGithub = () => {
        loginWithGithub()
            .then(result => {
                console.log(result.user)
                toast.success('You have logged in successfully');


            })
            .catch(error => {
                console.error(error)

            })
    }

    return (
        <div className="pt-28 pb-20 bg-[#2095AE]">
            <div className="w-full font-barlow mx-auto max-w-md p-8 space-y-3 rounded-none text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-1 text-lg">
                        <label className="block font-medium text-xl">Email Address</label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" {...register("email", { required: true })} />
                        {errors.password && <span className="text-red-700">This field is required</span>}
                    </div>

                    <div className="space-y-1 text-lg">
                        <label className="block font-medium text-xl">Password</label>
                        <input type="password" name="password" placeholder="Enter Your Password" className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-100 text-black focus:border-violet-400" {...register("password", { required: true })} />
                        {errors.password && <span className="text-red-700">This field is required</span>}
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm bg-[#0f2454] text-white text-lg">Login</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-[#0f2454]"></div>
                    <p className="px-3 text-lg font-medium">Or Login With</p>
                    <div className="flex-1 h-px sm:w-16 bg-[#0f2454]"></div>
                </div>
                <div className="space-y-5">
                    <div>
                        <button onClick={handleLoginWithGoogle} className="text-lg flex items-center justify-center w-full p-4 space-x-4 rounded-md focus:ring-2 focus:ring-offset-1 border-[#0f2454] bg-[#0f2454] border-2">
                            <FaGoogle></FaGoogle>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <div>
                        <button onClick={handleLoginWithGithub} className="text-lg flex items-center justify-center w-full p-4 space-x-4 border-2 rounded-md focus:ring-2 focus:ring-offset-1 border-[#0f2454] bg-[#0f2454] focus:dark:ring-violet-600">
                            <FaGithub></FaGithub>
                            <p>Login with GitHub</p>
                        </button>
                    </div>
                </div>
                <p className="text-lg font-normal text-center sm:px-6">Do not have an account?
                    <Link to='/register' className="underline ml-2 font-semibold text-[#0f2454]">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;