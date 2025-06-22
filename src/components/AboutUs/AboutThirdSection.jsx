import { useTranslation } from "react-i18next";

function AboutThirdSection({ language }) {
    const { t } = useTranslation();

    return (
        <div dir={language == "ar" ? "rtl" : "ltr"} className="px-[50px] flex flex-col gap-[60px] text-center">
            <div className="flex flex-col items-center">
                <h2 className="text-[30px] font-[700]">{t("الرؤية")}</h2>
                <p className="max-w-[600px]">{t("نحن ملتزمون بأن نكون شركة رائدة ومبتكرة في الصناعات الدوائية.")}</p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-[30px] font-[700]">{t("الرسالة")}</h2>
                <p className="max-w-[600px]">
                    {t(
                        "نحن نسعى باستمرار لتقديم منتجات قيّمة ومبتكرة تُرضي المرضى ومقدمي الرعاية الصحية، إذ نؤمن بأن تحسين جودة الحياة يتحقق من خلال بيئة عمل صحية وموثوقة وطموحة."
                    )}
                </p>
            </div>
            <div className="flex flex-col items-center gap-[20px] mb-[50px]">
                <h2 className="text-[30px] font-[700] underline mb-[15px]">{t("القيم")}</h2>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">{t("الابتكار")}</h3>
                    <p>{t("نسعى باستمرار ونتبنى الأفكار الجديدة لتطوير حلول مبتكرة وحديثة في صناعة الأدوية.")}</p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">{t("الجودة")}</h3>
                    <p>
                        {t(
                            "نحن ملتزمون بتقديم منتجات عالية الجودة تُحسِّن صحة المرضى ورفاهيتهم، وتلبّي احتياجات مقدمي الرعاية الصحية."
                        )}
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">{t("النزاهة")}</h3>
                    <p>{t("نلتزم بأعلى المعايير والممارسات الأخلاقية، لضمان الموثوقية في جميع أعمالنا ومنتجاتنا.")}</p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">{t("التعاون")}</h3>
                    <p>
                        {t(
                            "نؤمن بقوة العمل الجماعي والشراكة، ونعمل معاً مع الزملاء والمرضى ومقدمي الرعاية الصحية لتحقيق أهداف مشتركة."
                        )}
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">{t("الاحترام")}</h3>
                    <p>
                        {t(
                            "نُقدّر ونحترم وجهات النظر المتنوعة لموظفينا ومرضانا وشركائنا، ونعمل على تعزيز بيئة شاملة وداعمة."
                        )}
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">{t("الالتزام")}</h3>
                    <p>
                        {t("نحن ملتزمون بمهمتنا ورؤيتنا، ونسعى باستمرار للتميز وإحداث تأثير إيجابي في صناعة الأدوية.")}
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">{t("الاستدامة")}</h3>
                    <p>{t("نحن ملتزمون بممارسات مستدامة تعود بالفائدة على مجتمعنا والبيئة.")}</p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">{t("تركيز على العملاء")}</h3>
                    <p>{t("نحن نعطي الأولوية لاحتياجات ورضا عملائنا، ونقدم منتجات تعزز فعلاً من جودة حياتهم.")}</p>
                </p>
            </div>
        </div>
    );
}

export default AboutThirdSection;
