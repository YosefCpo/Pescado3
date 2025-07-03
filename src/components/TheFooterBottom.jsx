import BlueDashLogo from "../assets/images/Logo White.png";
import PescadoLogo from "../assets/images/Pescado Logo White.png";

function TheFooterBottom() {
    return (
        <div className="bg-[#1a1c37] text-white">
            <div className="line w-full h-[2px] bg-white"></div>
            <div className="container py-[30px] flex items-center justify-between gap-[30px] max-md:flex-col">
                <div className="info flex flex-col gap-[25px] max-md:order-1">
                    <p>Egypt &copy; 2015-2025 Pescado Pharmaceuticals. All rights reserved.</p>
                    <p className="flex items-center max-md:justify-center">
                        Powered By <img className="max-w-full w-[250px]" src={BlueDashLogo} />
                    </p>
                </div>
                <div className="image max-md:order-[0]">
                    <img className="w-[200px]" src={PescadoLogo} />
                </div>
            </div>
        </div>
    );
}

export default TheFooterBottom;
