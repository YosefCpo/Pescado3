import { useTranslation } from "react-i18next";
import SecondSectionImage from "../../assets/images/SecondSection.png";

function SecondSection({ lang }) {
    const { t } = useTranslation();

    return (
        <div className="py-[100px] bg-[#f5f5f5]">
            <div className="container flex justify-center max-md:flex-col max-md:items-center max-md:gap-[40px]">
                <div className="img">
                    <img src={SecondSectionImage} alt="" />
                </div>
                <div
                    className="info flex-[0.5] pl-[80px] max-md:text-center max-md:pl-0"
                    dir={`${lang == "en" ? "ltr" : "rtl"}`}
                >
                    <h2 className="text-[50px] font-[500]">{t("خليك بيسكادو!")}</h2>
                    <p className="text-[20px] mt-[20px]">
                        {t(
                            "عايز دفعه تبدأ بيها يومك في الشغل وعايزة تبقي سوبر ماما وتضمني نمو صحي وسليم لأطفالك؟ نفسك في أداء احسن في التمرين؟ بتحلمي بشعر طويل وبشرة خالية من العيوب؟"
                        )}
                        <br />
                        {t("تركيز اكتر للولاد في المذاكرة؟")}
                        <br />
                        {t("عيلة بيسكادو فيها كل المنتجات اللي هيحتاجها كل أفراد عيلتك كل يوم")}
                    </p>
                    <p className="text-[20px] mt-[60px]">{t("فوايد الحياة الصحية ملهاش حدود! مستني ايه؟")}</p>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
