import { useTranslation } from "react-i18next";
import LaptopImage from "../assets/images/Laptop.png";
import Form from "../components/Contact/Form";

function ContactPage({ language }) {
    const { t } = useTranslation();

    return (
        <div className="mt-[80px] mb-[110px]">
            <div dir={language == "ar" ? "rtl" : "ltr"} className="container flex gap-[30px]">
                <div className="info flex-[0.5]">
                    <h2 className="text-[45px] font-[500]">{t("اهلاً بيك!")}</h2>
                    <p className="mt-[20px]">{t("منتجات بيسكادو شريكك الأساسي لحياة صحية كل يوم")}</p>
                    <img className="max-w-full mt-[30px]" src={LaptopImage} alt="" />
                    <span className="text-[14px] inline-block mt-[20px]">
                        {t("لإن صحتكم هي أولويتنا، نحرص دائماً على تقديم أفضل المنتجات لنلبي جميع احتياجاتكم")}
                    </span>
                </div>
                <div className="form flex-[0.5]">
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
