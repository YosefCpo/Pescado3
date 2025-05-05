import AboutFirstSection from "../components/AboutUs/AboutFirstSection";
import AboutSecondSection from "../components/AboutUs/AboutSecondSection";

function AboutUs({ language }) {
    return (
        <div>
            <div className="container">
                <AboutFirstSection language={language} />
                <AboutSecondSection language={language} />
            </div>
        </div>
    );
}

export default AboutUs;
