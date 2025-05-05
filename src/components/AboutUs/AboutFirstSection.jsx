import { useTranslation } from "react-i18next";
import MomImage from "../../assets/images/Mom.jpg";

function AboutFirstSection({ language }) {
    const { t } = useTranslation();

    return (
        <div dir={language == "ar" ? "rtl" : "ltr"} className="max-w-[700px] mt-[100px] mx-auto">
            <h2 className="font-bold text-[46px]">{t("اكتشف أفضل إمكانياتك!")}</h2>
            <p className="text-[18px] mt-[20px]">
                {t(
                    'مين فينا مش عايز يعيش أكتر حياة صحية ممكنة بس مكسل يبدأ او معندوش وقت! و "حياة صحية" اللي نقصدها مش بس الحياة اللي مفيهاش أمراض؛ لكن كمان حياة مليانة طاقة وحيوية تساعدك على نوم أفضل ولياقة بدنية عالية وتحسن ملحوظ في صحتك'
                )}
            </p>
            <img className="mt-[40px] w-[470px] h-[300px] object-cover justify-self-end" src={MomImage} alt="" />
        </div>
    );
}

export default AboutFirstSection;
