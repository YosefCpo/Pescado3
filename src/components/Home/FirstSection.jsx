import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function FirstSection({ header, description, buttonText, image, order = "0", bgColor }) {
    const { t } = useTranslation();

    return (
        <div
            className="pt-[100px] pb-[40px]"
            style={{
                backgroundColor: bgColor,
            }}
        >
            <div className="container flex justify-center items-center gap-[-100px]">
                <div
                    dir="rtl"
                    className="info bg-white p-[50px] pl-[80px] z-[5]"
                    style={{
                        order: order,
                        marginLeft: order == 1 ? "-200px" : "0",
                    }}
                >
                    <h2 className="font-bold text-[50px] leading-[1.2] max-w-[400px]">{t(header)}</h2>
                    <p className="mt-5 max-w-[400px] text-[18px]">{t(description)}</p>
                    <Link
                        className="bg-primary text-white font-bold text-[20px] py-5 px-9 rounded-md inline-block mt-5"
                        to="/products"
                    >
                        {t(buttonText)}
                    </Link>
                </div>
                <div className={`img ${order == 0 && "ml-[-200px]"}`}>
                    <img className="h-[600px] w-[750px] object-cover" src={image} alt="Medicine" />
                </div>
            </div>
        </div>
    );
}

export default FirstSection;
