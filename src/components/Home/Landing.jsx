import { Link } from "react-router-dom";
import LandingImage from "../../assets/images/pngtree.png";

function Landing() {
    return (
        <div className="bg-[#00021d]">
            <div className="container flex items-center pt-[160px] pb-[30px] gap-[20px]">
                <div className="info text-white flex flex-col gap-[50px]">
                    <h2 className="text-[50px] max-w-[500px] leading-[1.2]">
                        MAKING ACCESS TO OUR USEFUL SUPPLEMENTS EASY
                    </h2>
                    <p className="text-[19px] font-[500]">
                        By focusing on our customers and by establishing a relationship of trust. we are able to deliver
                        vital treatments to patients.
                    </p>
                    <p className="text-[19px] font-[500]">
                        Pharmacies and healthcare professionals who are in need of unlicensed medicines.
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
                <div className="bg-[#00021D]">
                    <img className="max-w-full" src={LandingImage} />
                </div>
            </div>
        </div>
    );
}

export default Landing;
