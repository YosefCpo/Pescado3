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
                        Stronger bones, smooth skin, healthier hair, balanced nutrition, healthy baby growth, reliable
                        immunity, and much more that you can easily reach when you make our supplements a part of your
                        daily life.
                    </p>
                </div>
                <img src={AboutImage} alt="about" />
            </div>
        </div>
    );
}

export default AboutSecondSection;
