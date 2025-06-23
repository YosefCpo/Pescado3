function Product({ product }) {
    return (
        <a
            href={`/products/${product.id}`}
            className="flex flex-col items-center gap-[10px] w-[23.9%] max-xxl:w-[48%] max-md:w-[100%] bg-[#f1f1f1] py-[25px] px-[30px] rounded-3xl"
        >
            <img
                className="w-[200px] h-[200px] object-contain"
                src={`/Images/${product?.images[0]}`}
                alt={product?.name}
            />
            <h2 className="mt-[10px] w-full font-[500] text-[17px]" style={{ fontFamily: "poppins" }}>
                {product?.name}
            </h2>
            <div className="info w-full flex flex-col gap-[8px]">
                <div className="flex justify-between gap-[20px]">
                    <span className="flex-1 text-[#4c79de]">Active:</span>
                    <span className="flex-1">{product?.active}</span>
                </div>
                <div className="flex justify-between gap-[20px]">
                    <span className="flex-1 text-[#4c79de]">Dosage form:</span>
                    <span className="flex-1">{product?.dosage_form}</span>
                </div>
                <div className="flex justify-between gap-[20px]">
                    <span className="flex-1 text-[#4c79de]">Package:</span>
                    <span className="flex-1">{product?.package}</span>
                </div>
                <div className="flex justify-between gap-[20px]">
                    <span className="flex-1 text-[#4c79de]">Shelf life:</span>
                    <span className="flex-1">{product?.shelf_life}</span>
                </div>
            </div>
            <div className="justify-self-end flex-1 flex items-end w-full text-center">
                <a
                    href={`/products/${product.id}`}
                    className="inline-block bg-[#22202a] text-white py-[15px] px-[30px] rounded-full w-full font-[500]"
                >
                    View Product
                </a>
            </div>
        </a>
    );
}

export default Product;
