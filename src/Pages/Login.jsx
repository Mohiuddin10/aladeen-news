import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 max-w-lg shrink-0 shadow-xl w-[752px] rounded-none p-10">
                <h2 className="text-4xl font-semibold mx-auto">Login your account</h2>
                <div className="card-body">

                    <fieldset className="fieldset">
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral rounded-none mt-4">Login</button>
                    </fieldset>
                </div>
                <p className="mx-auto font-semibold">Dont’t Have An Account ? <Link to="/auth/register" className="text-[#F75B5F]">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;