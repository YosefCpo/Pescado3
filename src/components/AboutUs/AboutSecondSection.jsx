import { useTranslation } from "react-i18next";
import AboutImage from "../../assets/images/About.png";

function AboutSecondSection({ language }) {
    const { t } = useTranslation();

    return (
        <div className="mt-[150px] mb-[100px]">
            <div className="container flex gap-[40px]">
                <div className="info">
                    <h2 className="text-[35px] font-bold">The perfect product for a perfect life!</h2>
                    <p className="text-[20px] mt-[30px]">
                        The healthy life I strive for isn't one free of flaws—it's one filled with small wins that make
                        me feel alive. And if that's all we aim for, it's already enough.
                    </p>
                </div>
                <img src={AboutImage} alt="about" />
            </div>
        </div>
    );
}

export default AboutSecondSection;
