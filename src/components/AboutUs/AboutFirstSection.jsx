import { useTranslation } from "react-i18next";
import MomImage from "../../assets/images/Mom.jpg";

function AboutFirstSection({ language }) {
    const { t } = useTranslation();

    return (
        <div className="max-w-[700px] mt-[100px] mx-auto pt-[150px]">
            <h2 className="font-bold text-[46px]">Discover your Potential!</h2>
            <p className="text-[18px] mt-[20px]">
                Who isn't always striving to live a healthier life but is too lazy to start or simply doesn't have the
                time or drive to do so? The healthy life we refer to isn't the one that is free of chronic diseases but
                a life filled with energy and vitality that improves your fitness & shows a significant and noticable
                improvement in your quality of sleep and overall heath
            </p>
            <img className="mt-[40px] w-[470px] h-[300px] object-cover justify-self-end" src={MomImage} alt="" />
        </div>
    );
}

export default AboutFirstSection;
