import { useParams } from "react-router-dom";
import products from "../assets/products.json";
import { useEffect, useState } from "react";

function ProductPage() {
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        setProduct(
            products?.find((product) => {
                return product.id == id;
            })
        );
    }, [product, id]);

    return (
        <div>
            <div className="header bg-[#ffffff] pt-[150px] text-[#001f54] text-center font-[700]">
                <h2 className="text-[40px]">{product?.name}</h2>
            </div>
            <div className="py-[60px] bg-[#ffffff] text-[#001f54]" dir="ltr">
                <div className="container flex items-center justify-center gap-[60px] max-lg:flex-col">
                    <img className="max-w-[500px]" src={`/Images/${product?.images[0]}`} alt={product?.name} />
                    <div className="info flex flex-col gap-[10px] text-[20px]">
                        <h2 className="font-bold text-[20px]">Name: {product?.name}</h2>
                        <h3>Active: {product?.active}</h3>
                        <div>
                            Indication:{" "}
                            <ul className="flex flex-col gap-[10px] list-disc pl-[40px]">
                                {product?.indication.split(",").map((text, i) => {
                                    return <li key={i}>{text}</li>;
                                })}
                            </ul>
                        </div>
                        <p>Dosage Form: {product?.dosage_form}</p>
                        <p>Package: {product?.package}</p>
                        <p>Shelf Life: {product?.shelf_life}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
