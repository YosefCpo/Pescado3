function Product({ product }) {
    return (
        <a
            href={`/products/${product.id}`}
            className="flex flex-col items-center w-[23.9%] max-xxl:w-[48%] max-md:w-[100%]"
        >
            <img
                className="w-[200px] h-[200px] object-contain"
                src={`/Images/${product?.images[0]}`}
                alt={product?.name}
            />
            <h2 className="mt-[10px]">{product?.name}</h2>
        </a>
    );
}

export default Product;
