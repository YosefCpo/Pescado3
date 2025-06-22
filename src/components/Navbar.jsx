import { Link } from "react-router-dom";
import Logo from "../assets/images/LogoGray.png";
import { useTranslation } from "react-i18next";
import "../assets/css/navbar.css";
import HamburgerIcon from "../assets/images/HamburgerIcon.png";
import CloseIcon from "../assets/images/Close.png";

function Navbar({ language, setLanguage }) {
    const { t } = useTranslation();

    function openMenu() {
        const menu = document.getElementsByClassName("main-menu")[0];

        menu.classList.add("open");
    }

    function closeMenu() {
        const menu = document.getElementsByClassName("main-menu")[0];

        menu.classList.remove("open");
    }

    return (
        <div className="navbar sticky top-0 left-0 bg-white z-[10000]">
            <div className="container flex items-center justify-between">
                <Link to="/">
                    <img className="max-w-full w-[180px]" src={Logo} />
                </Link>
                <div className="open-menu" onClick={openMenu}>
                    <img src={HamburgerIcon} className="max-w-full w-[30px]" />
                </div>
                <ul dir="rtl" className="main-menu flex items-center gap-[30px] text-[18px]">
                    <img src={CloseIcon} className="max-w-full w-[30px]" onClick={closeMenu} />
                    <li>
                        <Link to="/products" onClick={closeMenu}>
                            {t("منتجاتنا")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            {t("عن بيسكادو")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeMenu}>
                            {t("اتصل بنا")}
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center">
                    <Link
                        onClick={() => {
                            if (language == "en") {
                                setLanguage("ar");
                            } else {
                                setLanguage("en");
                            }
                        }}
                        className="bg-black text-white font-[500] py-3 px-5 rounded-md text-[14px]"
                    >
                        {t("English")}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
