import { Link } from "react-router-dom";
import Facebook from "../assets/images/Mask Group 2.png";
import LinkedIn from "../assets/images/Mask Group 3.png";
import "../assets/css/footer.css";

function TheFooter() {
    return (
        <footer className="bg-[#1a1c37] bg-[#25477a] text-white py-[50px]">
            <div className="container">
                <div className="boxes max-lg:flex max-lg:flex-col max-lg:!gap-[70px]">
                    <div className="box">
                        <h2 className="text-[50px]">GET IN TOUCH!</h2>
                        <p className="text-[18px]">Website Map:</p>
                        <div className="flex items-center justify-between gap-[20px]">
                            <div className="flex flex-col gap-[10px] text-[18px]">
                                <Link to="/">Home</Link>
                                <Link to="/">Products</Link>
                                <Link to="/">Pipeline</Link>
                            </div>
                            <div className="flex flex-col gap-[10px] text-[18px]">
                                <Link to="/">About Us</Link>
                                <Link to="/">Pharmacovigilance</Link>
                                <Link to="/">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="box text-[19px]">
                        <h3>Locations:</h3>
                        <p>Cairo Office Address: 3 Hassan El Mammon Street, Mdinet Nasr, Cairo, Egypt.</p>
                        <p>Mansoura Office Address: Aly Mobark Street, Mansoura, Dakahlia.</p>
                        <p>Telephone Number: +20 120 277 4050</p>
                    </div>
                    <div className="box text-[19px]">
                        <h3>Contact Us:</h3>
                        <p>Info@pescadopharma.com</p>
                        <div className="flex items-center gap-[20px]">
                            <a href="/">
                                <img src={Facebook} alt="facebook" />
                            </a>
                            <a href="/">
                                <img src={LinkedIn} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default TheFooter;
