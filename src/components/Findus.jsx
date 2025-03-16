import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Findus = () => {
    return (
        <div>
            <h2 className="font-semibold">Find Us On</h2>
            <div className="">
                <button><FaFacebook></FaFacebook>Facebook</button>
                <button><BsTwitterX></BsTwitterX>X</button>
                <button>Instragram</button>
            </div>
        </div>
    );
};

export default Findus;