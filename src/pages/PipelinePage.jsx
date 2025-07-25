import AProduct from "../components/AProduct";
import products from "../assets/products.json";
import PipelineSection from "../components/PipelineSection";
import BecomePartner from "../components/Home/BecomePartner";

function PipelinePage() {
    const product = products.find((product) => {
        return product.id == 8;
    });

    return (
        <div className="pipeline bg-[#ffffff] pt-[200px] text-white">
            <div className="container">
                <div className="first flex items-center justify-between gap-[50px] max-lg:flex-col max-lg:items-center max-lg:text-center">
                    <div className="info flex-1 flex flex-col gap-[80px] text-[#00021d]">
                        <h2 className="text-[70px] tracking-[6px] leading-[1.4]">Our Pipeline Products</h2>
                        <div className="box max-w-[600px] max-lg:max-w-full">
                            <p className="text-[18px]">
                                By focusing on our customers and by establishing a relationship of trust. we are able to
                                deliver vital treatments to patients.
                            </p>
                            <p className="text-[18px] mt-[20px]">
                                Pharmacies and healthcare professionals who are in need of unlicensed medicines.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-end">
                        <AProduct product={product} />
                    </div>
                </div>
                <PipelineSection />
                {/* <BecomePartner /> */}
            </div>
        </div>
    );
}

export default PipelinePage;
