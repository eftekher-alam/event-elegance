import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider/AuthProvider";
import { toast } from "react-toastify";
import { AiFillGoogleCircle, AiOutlineGithub } from "react-icons/ai";

const Login = () => {

    const currLocation = useLocation();
    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const handlerLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);


        signIn(email, password)
            .then(() => {
                toast.success('login successful');
                navigate(currLocation?.state ? currLocation?.state : "/");
            })
            .catch(error => {
                if (error.code.toString() == "auth/invalid-login-credentials")
                    toast.error("email or password doesn't match");
                else
                    toast.error(error.code);
            })
    }
    const handlerGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success('account created successfully');
                navigate(currLocation?.state ? currLocation?.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handlerGithubSignIn = () => {
        githubSignIn()
            .then(() => {
                toast.success('account created successfully');
                navigate(currLocation?.state ? currLocation?.state : "/");
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col gap-16 lg:flex-row-reverse">
                <div className="text-center lg:text-left"
                    data-aos="fade-down"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                >
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Your adventure begins here. Reserve your spot today</p>
                </div>
                <div
                    className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="linear"
                >
                    <form onSubmit={handlerLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Login</button>
                        </div>
                        <div className="form-control pt-4">
                            <div className="w-full space-y-2">
                                <p className="text-center">log in with one of these options</p>
                                <div className="flex justify-center text-3xl gap-4">
                                    <span onClick={handlerGoogleSignIn}>
                                        <AiFillGoogleCircle ></AiFillGoogleCircle>
                                    </span>
                                    <span onClick={handlerGithubSignIn}>
                                        <AiOutlineGithub ></AiOutlineGithub>
                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="form-control">
                            <label className="text-center">
                                <div className="label-text-alt">
                                    {`Don't have an account? `}
                                    <Link state={currLocation?.state} to={"/register"} className="font-bold  link link-hover">Register</Link>
                                </div>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;