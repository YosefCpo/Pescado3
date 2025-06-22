import products from "../assets/products.json";
import Product from "./Product";

function Products() {
    return (
        <div className="py-[60px]">
            <div className="container">
                <div className="flex flex-wrap gap-[20px]">
                    {products.map((product) => {
                        return <Product key={product.id} product={product} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Products;
