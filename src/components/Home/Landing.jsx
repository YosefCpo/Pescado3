import { Link } from "react-router-dom";
import LandingImage from "../../assets/images/pngtree.png";

function Landing() {
    return (
        <div className="bg-[#00021d] max-xl:pt-[60px]">
            <div className="container flex items-center pt-[160px] pb-[30px] gap-[20px] max-xl:flex-col max-xl:items-center">
                <div className="info flex-1 text-white flex flex-col gap-[50px] max-xl:items-center max-xl:text-center">
                    <h2 className="text-[50px] max-w-[500px] leading-[1.2]">
                        Empowering Patients Through Innovative Pharmaceuticals
                    </h2>
                    <p className="text-[19px] font-[500]">
                        We develop and deliver groundbreaking treatments that improve lives, to empower patients with
                        access to effective, safe, and high-quality medicines.
                    </p>
                    <p className="text-[19px] font-[500]">
                        We're committed to scientific excellence and patient-centricity. Through innovation and
                        collaboration, we strive to enhance patient outcomes and well-being. Together, let's create a
                        healthier world.
                    </p>
                    <div className="flex items-center gap-[20px]">
                        <Link className="bg-white border-[1px] border-white text-black py-[15px] px-[50px] txet-[18px] rounded-full">
                            About Us
                        </Link>
                        <Link className="bg-transparent border-[1px] border-white text-white py-[15px] px-[50px] txet-[18px] rounded-full">
                            Our Products
                        </Link>
                    </div>
                </div>
                <div className="bg-[#00021D] flex-1">
                    <div className="shadow"></div>
                    <img className="max-w-full" src={LandingImage} />
                </div>
            </div>
        </div>
    );
}

export default Landing;
