import { Link } from "react-router-dom";

function AProduct({ product }) {
    return (
        <Link
            to={`/products/${product.id}`}
            className="product flex flex-col items-center gap-[20px] border-[1px] border-[#00021d]"
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
