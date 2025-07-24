import { useTranslation } from "react-i18next";
import MomImage from "../../assets/images/Mom.jpg";

function AboutFirstSection({ language }) {
    const { t } = useTranslation();

    return (
        <div className="max-w-[700px] mt-[100px] mx-auto bg-[#ffffff] flex flex-col items-center text-center">
            <h2 className="font-bold text-[46px]">Discover your Potential!</h2>
            <p className="text-[18px] mt-[20px]">
                Most of us want to live healthier—not just to avoid illness, but to wake up feeling refreshed, move with
                ease, and sleep through the night without tossing and turning. But life gets in the way. We're busy,
                tired, distracted, or just not sure how to begin. Real health isn't found in extremes or perfection—it's
                built in the quiet, consistent moments we choose ourselves. A short walk. A glass of water instead of
                that third coffee. Stretching before bed. These aren't life-altering in isolation, but they create a
                ripple. Over time, they build energy, vitality, and a sleep quality that actually feels like rest.
            </p>
            <img className="mt-[40px] object-cover" src={MomImage} alt="" />
        </div>
    );
}

export default AboutFirstSection;
