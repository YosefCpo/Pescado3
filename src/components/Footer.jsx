import { Link } from "react-router-dom";
import Logo from "../assets/images/LogoGray.png";
import Linkedin from "../assets/images/linkedin.png";
import Facebook from "../assets/images/facebook.png";
import { useTranslation } from "react-i18next";

function Footer({ language }) {
    const { t } = useTranslation();

    return (
        <footer className="bg-black text-white" dir={`${language == "en" ? "ltr" : "rtl"}`}>
            <div className="container">
                <div className="wrap flex gap-[200px] mb-[40px] max-md:flex-col max-md:gap-0 max-md:items-center max-md:text-center">
                    <div className="img">
                        <img className="max-w-[400px] max-md:max-w-[300px]" src={Logo} alt="Logo" />
                        <h3 className="text-[30px] font-[500]">{t("جاهز للحياة!")}</h3>
                    </div>
                    <div className="mt-[50px]">
                        <h3 className="font-[500] text-[22px]">{t("بيسكادو")}</h3>
                        <ul className="mt-[20px] text-[14px]">
                            <li>
                                <Link to="products">{t("منتجاتنا")}</Link>
                            </li>
                            <li>
                                <Link to="about-us">{t("عن بيسكادو")}</Link>
                            </li>
                            <li>
                                <Link to="contact">{t("اتصل بنا")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-[50px]">
                        <h3 className="font-[500] text-[22px]">{t("تواصل معنا")}</h3>
                        <ul className="mt-[20px] text-[14px] flex flex-col gap-[10px]">
                            <li>
                                <a target="_blank" href="products">
                                    Info@pescadopharma.com
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.linkedin.com/company/pescado-pharmaceuticals">
                                    <img className="max-w-full w-[40px]" src={Linkedin} alt="Linkedin" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.facebook.com/PescadoPharmaceuticals">
                                    <img className="max-w-full w-[40px]" src={Facebook} alt="Facebook" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="pb-[2px]" />
                <div className="flex items-center justify-between pb-[20px] max-md:flex-col max-md:gap-[10px]">
                    <span className="text-[12px] font-[500]">
                        {t(
                            "بيسكادو مكملات غذائية مصرح بها من الهيئة القومية لسلامة الغذاء … متوفر بجميع الصيدليات بمصر والدول العربية"
                        )}
                    </span>
                    <span>{t("جميع حقوق النشر محفوظة لشركة 2025")}</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
