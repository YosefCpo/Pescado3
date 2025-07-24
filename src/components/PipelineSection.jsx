import products from "../assets/products.json";

function PipelineSection() {
    return (
        <div className="py-[60px] flex flex-col gap-[50px]">
            <div className="box flex gap-[30px] bg-white text-black border-[1px] border-[#00021d] rounded-2xl p-[30px] max-md:flex-col max-md:items-center max-md:text-center">
                <div className="index">
                    <h2 className="text-[20px] font-[500] w-[50px] h-[50px] flex items-center justify-center rounded-full border-[1px] border-black">
                        1
                    </h2>
                </div>
                <div className="first">
                    <h2 className="text-[22px] font-[500]">Yonatrevon Plus 600</h2>
                    <div className="mt-[30px] flex flex-col gap-[20px]">
                        <p>
                            Indications: <br /> Supports nervous system health.
                        </p>
                        <p>
                            Active: <br /> alpha lipoic acid 600mg + Magnesium + Vit.E + Vit. B1 + Vit. B6 + Vit. B12
                        </p>
                        <div className="boxes">
                            <div>
                                Dosage Form: <br /> Film Coated Tablet.
                            </div>
                            <br />
                            <div>
                                Therapeutic Area: <br /> Endocrine.
                            </div>
                            <br />
                            <div>
                                Expected Launch: <br /> OCT-2025.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box flex gap-[30px] bg-white text-black border-[1px] border-[#00021d] rounded-2xl p-[30px] max-md:flex-col max-md:items-center max-md:text-center">
                <div className="index">
                    <h2 className="text-[20px] font-[500] w-[50px] h-[50px] flex items-center justify-center rounded-full border-[1px] border-black">
                        2
                    </h2>
                </div>
                <div className="first">
                    <h2 className="text-[22px] font-[500]">Timbestatin 10/40</h2>
                    <div className="mt-[30px] flex flex-col gap-[20px]">
                        <p>
                            Indications: <br /> Lipid Lowering Agent.
                        </p>
                        <p>Active: Ezetimibe 10mg + Simvastatin 40mg.</p>
                        <div className="boxes">
                            <div>
                                Dosage Form: <br /> Film Coated Tablet.
                            </div>
                            <br />
                            <div>
                                Therapeutic Area: <br /> Cardiovascular.
                            </div>
                            <br />
                            <div>
                                Expected Launch: <br /> JUN-2026.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PipelineSection;
