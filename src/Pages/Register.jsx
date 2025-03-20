import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 max-w-lg shrink-0 shadow-xl w-[752px] rounded-none p-10">
                <h2 className="text-4xl font-semibold mx-auto">Register your account</h2>
                <div className="card-body">

                    <fieldset className="fieldset">
                        <label className="fieldset-label text-xl font-semibold">Your Name</label>
                        <input type="text" className="input" placeholder="Enter Your Name" />

                        <label className="fieldset-label text-xl font-semibold">Photo URL</label>
                        <input type="text" className="input" placeholder="Enter Your Photo URL" />

                        <label className="fieldset-label text-xl font-semibold">Email</label>
                        <input type="email" className="input" placeholder="Enter Your Email" />

                        <label className="fieldset-label text-xl font-semibold">Password</label>
                        <input type="password" className="input" placeholder="Enter Your Password" />
                        <div className="flex items-center gap-2.5">
                            <input type="checkbox" className="checkbox" />
                            <p className="link link-hover">Accept Term & Conditions</p></div>
                        <button className="btn btn-neutral rounded-none mt-4">Register</button>
                    </fieldset>
                </div>
                <p className="mx-auto font-semibold">Already registered? Please <Link to="/auth/login" className="text-[#F75B5F]">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;