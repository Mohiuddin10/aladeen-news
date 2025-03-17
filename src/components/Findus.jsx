import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";

const Findus = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-10 *:hover:bg-amber-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook>Facebook</button>
                <button className="btn join-item justify-start"><BsTwitterX></BsTwitterX>X</button>
                <button className="btn join-item justify-start"><SlSocialInstagram></SlSocialInstagram>Instragram</button>
            </div>
        </div>
    );
};

export default Findus;