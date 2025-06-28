import products from "../assets/products.json";
import AProduct from "../components/AProduct";
import "../assets/css/products.css";
import BecomePartner from "../components/Home/BecomePartner";

function TheProductsPage() {
    return (
        <div className="bg-[#00021d] pt-[200px] text-white pb-[60px]">
            <div className="container">
                <h2 className="text-center text-[45px]">Our Products</h2>
                <div className="products pt-[50px] flex justify-between items-stretch flex-wrap gap-[20px]">
                    {products.map((product) => {
                        return <AProduct product={product} />;
                    })}
                </div>
                <BecomePartner />
            </div>
        </div>
    );
}

export default TheProductsPage;
