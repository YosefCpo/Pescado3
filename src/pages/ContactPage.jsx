import { useTranslation } from "react-i18next";
import LaptopImage from "../assets/images/Laptop.png";
import Form from "../components/Contact/Form";

function ContactPage({ language }) {
    const { t } = useTranslation();

    return (
        <div className="pt-[220px] pb-[110px] bg-[#ffffff] text-[#00021d]">
            <div className="container flex gap-[30px]">
                <div className="info flex-[0.5]">
                    <h2 className="text-[45px] font-[500]">Welcome!</h2>
                    <p className="mt-[20px]">Pescado products are your essential partner for a healthy life everyday</p>
                    <img className="max-w-full mt-[30px]" src={LaptopImage} alt="" />
                    <span className="text-[14px] inline-block mt-[20px]">
                        Because your health is our priority, we are always keen on providing the best products to meet
                        all your needs.
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
