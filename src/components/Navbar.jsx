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
        const becomeButton = document.querySelector(".become-button");

        menu.classList.add("open");
        becomeButton.classList.add("show");
    }

    function closeMenu() {
        const menu = document.getElementsByClassName("main-menu")[0];
        const becomeButton = document.querySelector(".become-button");

        menu.classList.remove("open");
        becomeButton.classList.remove("show");
    }

    return (
        <div id="navbar" className="navbar fixed w-full top-0 left-0 z-[10000] bg-transparent">
            <div className="container bg-[#00021d] flex items-center max-sm:justify-center max-sm:flex-wrap justify-between border-[1px] border-[white] text-white rounded-full mt-[20px] py-[15px] max-xl:py-[10px] !px-[50px]">
                <Link to="/">
                    <img className="max-w-full w-[120px] max-sm:w-[100px]" src={Logo} />
                </Link>
                <div className="open-menu" onClick={openMenu}>
                    <img src={HamburgerIcon} className="max-w-full w-[30px]" />
                </div>
                <ul className="main-menu flex items-center gap-[30px] text-[18px]">
                    <img src={CloseIcon} className="max-w-full w-[30px]" onClick={closeMenu} />
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products" onClick={closeMenu}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to="/pipeline" onClick={closeMenu}>
                            Pipeline
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/pharmacovigilance" onClick={closeMenu}>
                            Pharmacovigilance
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center become-button">
                    <Link
                        // onClick={() => {
                        //     if (language == "en") {
                        //         setLanguage("ar");
                        //     } else {
                        //         setLanguage("en");
                        //     }
                        // }}
                        to="/contact"
                        className="bg-white text-black font-bold py-[17px] px-[35px] rounded-full"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
