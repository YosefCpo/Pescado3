import productsImage from "../assets/images/Products.jpeg";

function ProductsHeader() {
    return (
        <div>
            <div className="container flex flex-col items-center">
                <img className="w-full max-h-[300px]" src={productsImage} alt="Products Header" />
                <h3 className="mt-[100px] text-[40px]">منتجات بيسكادو</h3>
                <hr className="w-full bg-[#e5e7eb] h-[2px] mt-[35px]" />
            </div>
        </div>
    );
}

export default ProductsHeader;
