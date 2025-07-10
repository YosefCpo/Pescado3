import products from "../assets/products.json";
import AProduct from "../components/AProduct";
import "../assets/css/products.css";
import BecomePartner from "../components/Home/BecomePartner";
import { Link } from "react-router-dom";

function TheProductsPage() {
    const closePopup = (e) => {
        e.preventDefault();

        const popup = document.querySelector("#popup");
        const popupOverlay = document.querySelector("#popup-overlay");

        popup.style.display = "none";
        popupOverlay.style.display = "none";
    };

    return (
        <div className="bg-[#00021d] pt-[200px] text-white pb-[60px]">
            <div id="popup-overlay" className="fixed left-0 top-0 w-full h-full z-[100000] bg-[#00021de8]"></div>
            <div
                id="popup"
                className="popup fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white py-[50px] px-[40px] rounded-lg text-black z-[100001]"
            >
                <h3 className="text-[24px] font-[500]">This content is intended for Healthcare Providers.</h3>
                <p className="text-center mt-[15px] text-[17px]">Are you a qualified HCP?</p>
                <div className="w-full flex items-center justify-around mt-[25px]">
                    <Link
                        onClick={closePopup}
                        className="py-[8px] px-[70px] text-[20px] border-[1px] border-black rounded-3xl"
                    >
                        Yes
                    </Link>
                    <Link className="py-[8px] px-[70px] text-[20px] border-[1px] border-black rounded-3xl" to="/">
                        No
                    </Link>
                </div>
            </div>
            <div className="container">
                <h2 className="text-center text-[45px]">Our Products</h2>
                <div className="products pt-[50px] flex items-stretch flex-wrap gap-[25px]">
                    {products.map((product) => {
                        return <AProduct key={product.id} product={product} />;
                    })}
                </div>
                {/* <BecomePartner /> */}
            </div>
        </div>
    );
}

export default TheProductsPage;
