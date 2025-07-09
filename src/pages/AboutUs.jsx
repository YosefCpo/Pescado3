import AboutFirstSection from "../components/AboutUs/AboutFirstSection";
import AboutSecondSection from "../components/AboutUs/AboutSecondSection";
import AboutThirdSection from "../components/AboutUs/AboutThirdSection";

function AboutUs({ language }) {
    return (
        <div className="bg-[#00021d] pt-[150px] text-white">
            <div className="container">
                <AboutFirstSection language={language} />
                <AboutSecondSection language={language} />
                <AboutThirdSection language={language} />
            </div>
        </div>
    );
}

export default AboutUs;
