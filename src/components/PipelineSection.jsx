import products from "../assets/products.json";

function PipelineSection() {
    return (
        <div className="py-[60px] flex flex-col gap-[50px]">
            <div className="box flex gap-[30px] bg-white text-black rounded-2xl p-[30px] max-md:flex-col max-md:items-center max-md:text-center">
                <div className="index">
                    <h2 className="text-[20px] font-[500] w-[50px] h-[50px] flex items-center justify-center rounded-full border-[1px] border-black">
                        1
                    </h2>
                </div>
                <div className="first">
                    <h2 className="text-[22px] font-[500]">{products[6].name}</h2>
                    <div className="mt-[30px] flex flex-col gap-[20px]">
                        <p>
                            Indications: <br /> {products[6].indication}
                        </p>
                        <p>
                            Active: <br /> {products[6].active}
                        </p>
                        <div className="boxes">
                            <div>
                                Dosage Form: <br /> {products[6].dosage_form}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box flex gap-[30px] bg-white text-black rounded-2xl p-[30px] max-md:flex-col max-md:items-center max-md:text-center">
                <div className="index">
                    <h2 className="text-[20px] font-[500] w-[50px] h-[50px] flex items-center justify-center rounded-full border-[1px] border-black">
                        1
                    </h2>
                </div>
                <div className="first">
                    <h2 className="text-[22px] font-[500]">{products[0].name}</h2>
                    <div className="mt-[30px] flex flex-col gap-[20px]">
                        <p>
                            Indications: <br /> {products[0].indication}
                        </p>
                        <p>
                            Active: <br /> {products[0].active}
                        </p>
                        <div className="boxes">
                            <div>
                                Dosage Form: <br /> {products[0].dosage_form}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PipelineSection;
