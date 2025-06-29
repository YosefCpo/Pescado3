import { Link } from "react-router-dom";

function AProduct({ product }) {
    console.log(product.images[0]);

    return (
        <Link
            to={`/products/${product.id}`}
            className="product flex flex-col items-center gap-[20px] !px-[50px] !py-[50px]"
        >
            <img src={`/Images/${product.images[0]}`} />
            <h2 className="text-[17px] font-[500]">{product.name}</h2>
            <h3>Active: {product.active}</h3>
            <h3>Dosage Form: {product.dosage_form}</h3>
            <h3>Package: {product.package}</h3>
            <h3>Shelf life: {product.shelf_life}</h3>
        </Link>
    );
}

export default AProduct;
