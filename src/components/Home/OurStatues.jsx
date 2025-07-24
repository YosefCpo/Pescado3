function OurStatues() {
    return (
        <div className="bg-[#ffffff] text-[#00021d] py-[60px] pb-[80px]">
            <div className="container">
                <h2 className="text-center text-[50px]">Our Statues</h2>
                <div className="boxes flex items-center gap-[20px] justify-around mt-[80px] max-md:text-center max-md:gap-[5px] max-sm:flex-col max-sm:gap-[20px]">
                    <div className="flex flex-col items-center">
                        <h3 className="text-[60px] font-[500] text-center">+42K</h3>
                        <p className="text-[17px]">Satisfied Patient Since 2025</p>
                    </div>
                    <div className="sep h-[150px] w-[2px] bg-[#00021d] rounded-full max-sm:w-full max-sm:h-[2px]"></div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[60px] font-[500] text-center">+2K</h3>
                        <p className="text-[17px]">Case Study Over Years</p>
                    </div>
                    <div className="sep h-[150px] w-[2px] bg-[#00021d] rounded-full max-sm:w-full max-sm:h-[2px]"></div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[60px] font-[500] text-center">+7k</h3>
                        <p className="text-[17px]">Received Orders This Year</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurStatues;
