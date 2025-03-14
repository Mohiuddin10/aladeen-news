import moment from "moment";
import logo from "../assets/The Aladeen News.png"

const Header = () => {
    return (
        <div data-theme="light" className="">
            <div className="flex flex-col justify-center items-center gap-3 py-6">
                <img src={logo} alt="Aladeen News" />
                <h2 className="text-gray-500">Journalism With Responsibility</h2>
                <p><span className="font-bold">{moment().format("dddd")} </span>{moment().format("MMMM DD YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;