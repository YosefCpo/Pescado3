import FirstImage from "../../assets/images/First.png";
import SecondImage from "../../assets/images/Second.png";
import ThirdImage from "../../assets/images/Third.png";
import FourthImage from "../../assets/images/Fourth.png";
import { useTranslation } from "react-i18next";

function DarkSection() {
    const { t } = useTranslation();

    return (
        <div className="bg-black text-white py-[40px]">
            <div className="container">
                <h3 className="text-center text-[20px]">{t("ليه بيسكادو؟")}</h3>
                <h2 className="text-center text-[30px] max-w-[450px] m-auto leading-[1.3] mt-[30px]">
                    {t("عيلة بيسكادو فيها كل المنتجات اللي هيحتاجها كل أفراد عيلتك")}
                </h2>
                <div className="flex items-center justify-between mt-[50px] max-md:flex-col" dir="rtl">
                    <div className="box flex flex-col items-center">
                        <img src={FirstImage} alt="" />
                        <h4 className="text-[21px]">{t("مناعة أقوي")}</h4>
                    </div>
                    <div className="box flex flex-col items-center">
                        <img src={SecondImage} alt="" />
                        <h4 className="text-[21px]">{t("حيوية ونشاط")}</h4>
                    </div>
                    <div className="box flex flex-col items-center">
                        <img src={ThirdImage} alt="" />
                        <h4 className="text-[21px]">{t("نمو سليم")}</h4>
                    </div>
                    <div className="box flex flex-col items-center">
                        <img src={FourthImage} alt="" />
                        <h4 className="text-[21px]">{t("تغذية متوازنة")}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DarkSection;
