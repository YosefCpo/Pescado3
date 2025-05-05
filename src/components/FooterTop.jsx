import React from "react";
import { useTranslation } from "react-i18next";

function FooterTop({ language }) {
    const { t } = useTranslation();

    return (
        <div className="bg-[#ecf1f4] py-[50px]" dir={language == "ar" ? "rtl" : "ltr"}>
            <div className="container flex items-center justify-around max-md:flex-col max-md:gap-[50px]">
                <div className="info">
                    <h3 className="font-[500] text-[22px]">{t("فقط لك")}</h3>
                    <p className="text-[18px]">{t("اشترك وكن أول من يعرف عن كل جديد في منتجاتنا")}</p>
                </div>
                <form className="flex items-center gap-2 flex-wrap">
                    <input dir="ltr" type="email" placeholder="Email Address" className="p-[18px] w-[250px]" />
                    <button
                        className="text-white bg-black text-[25px] font-[500] py-[12px] px-[30px] rounded-md"
                        type="submit"
                    >
                        {t("ارسال")}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FooterTop;
