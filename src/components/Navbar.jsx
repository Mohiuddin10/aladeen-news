import { Link } from "react-router-dom";
import usericon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="">

            </div>
            <div className="space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex gap-5 items-center">
                <img src={usericon} alt="" />
                <Link to="/auth/login" className="btn btn-neutral w-[140px] rounded-none">Login</Link>
            </div>

        </div>
    );
};

export default Navbar;