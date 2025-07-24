import AboutFirstSection from "../components/AboutUs/AboutFirstSection";
import AboutSecondSection from "../components/AboutUs/AboutSecondSection";
import AboutThirdSection from "../components/AboutUs/AboutThirdSection";
import Leaders from "../components/Home/Leaders";

function AboutUs({ language }) {
    return (
        <div className="bg-[#ffffff] pt-[150px] text-[#00021d]">
            <div className="container">
                <AboutFirstSection language={language} />
                <AboutSecondSection language={language} />
                <Leaders />
                {/* <AboutThirdSection language={language} /> */}
            </div>
        </div>
    );
}

export default AboutUs;
