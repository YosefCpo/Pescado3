import { useTranslation } from "react-i18next";
import AboutImage from "../../assets/images/About.png";

function AboutSecondSection({ language }) {
    const { t } = useTranslation();

    return (
        <div className="mt-[150px] mb-[100px]">
            <div dir="rtl" className="container flex gap-[40px]">
                <div dir={language == "ar" ? "rtl" : "ltr"} className="info">
                    <h2 className="text-[35px] font-bold">{t("المنتج المثالي لحياة مثالية!")}</h2>
                    <p className="text-[20px] mt-[30px]">
                        {t(
                            "عظام أقوي، بشرة ناعمة، شعر صحي أكتر، تغذية متوازنة، نمو سليم للطفل، ومناعة يعتمد عليها، وأكتر بكتير ده اللي ممكن بسهولة توصله لما تخلي مكملاتنا الغذائية جزء من حياتك اليومية"
                        )}
                    </p>
                </div>
                <img src={AboutImage} alt="about" />
            </div>
        </div>
    );
}

export default AboutSecondSection;
