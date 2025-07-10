import Image from "../../assets/images/Agy.png";
import Arrow from "../../assets/images/arrow-up.png";
import "../../assets/css/leaders.css";

function Leaders() {
    const arrowOneClicked = (e) => {
        const textOne = document.querySelector("#text-1");

        textOne.classList.toggle("show");
        e.target.classList.toggle("flip");
    };

    const arrowTwoClicked = (e) => {
        const textOne = document.querySelector("#text-2");

        textOne.classList.toggle("show");
        e.target.classList.toggle("flip");
    };

    const arrowThreeClicked = (e) => {
        const textOne = document.querySelector("#text-3");

        textOne.classList.toggle("show");
        e.target.classList.toggle("flip");
    };

    return (
        <div className="leaders bg-[#00021d] text-white py-[60px] pt-0">
            <div className="container">
                {/* <div className="heading flex flex-col items-center gap-[50px]">
                    <h2 className="text-[40px] max-w-[550px] text-center">
                        Supplements Leaders
                        <br /> In The Egyptian Market
                    </h2>
                    <p className="text-[18px] max-w-[700px] text-center">
                        It has been through our unwavering commitment to our work that we have become one of the leading
                        and most reliable suppliers of supplements in Egypt.
                    </p>
                </div> */}
                <div className="flex items-center gap-[40px]">
                    <div className="info max-xl:!flex-1">
                        <div className="box">
                            <h3>
                                <span>About Our Vision?</span>
                                <img id="arrow-1" src={Arrow} onClick={arrowOneClicked} />
                            </h3>
                            <p id="text-1">
                                We are committed to be a pioneer & innovative company in pharmaceutical industries.
                            </p>
                        </div>
                        <div className="sep"></div>
                        <div className="box">
                            <h3>
                                <span>About Our Mission?</span>
                                <img id="arrow-2" src={Arrow} onClick={arrowTwoClicked} />
                            </h3>
                            <p id="text-2">
                                We are constantly striving to offer valuable and innovative products which will be
                                satisfying to both patients, and health care providers, as it has been our belief to
                                improve quality of life, through healthy, trustworthy, and ambitious working
                                environment.
                            </p>
                        </div>
                        <div className="sep"></div>
                        <div className="box">
                            <h3>
                                <span>About Our Values?</span>
                                <img id="arrow-3" src={Arrow} onClick={arrowThreeClicked} />
                            </h3>
                            <ul id="text-3" className="text-[18px]">
                                <li>
                                    <b>Innovation:</b> We continuously seek and embrace new ideas to develop
                                    cutting-edge solutions in the pharmaceutical industry
                                </li>
                                <li>
                                    <b>Quality:</b> We are dedicated to providing high-quality products that improve the
                                    health and well-being of patients and meet the needs of healthcare providers.
                                </li>
                                <li>
                                    <b>Integrity:</b> We uphold the highest ethical standards and practices, ensuring
                                    trustworthiness in all our actions and products
                                </li>
                                <li>
                                    <b>Collaboration:</b> We believe in the power of teamwork and partnership, working
                                    together with colleagues, patients, and healthcare providers to achieve common
                                    goals.
                                </li>
                                <li>
                                    <b>Respect:</b> We value and respect the diverse perspectives of our employees,
                                    patients, and partners, fostering an inclusive and supportive environment
                                </li>
                                <li>
                                    <b>Commitment:</b> We are committed to our mission and vision, consistently striving
                                    to excel and make a positive impact on the pharmaceutical industry.
                                </li>
                                <li>
                                    <b>Sustainability:</b> We are dedicated to sustainable practices that benefit our
                                    community and the environment.
                                </li>
                                <li>
                                    <b>Customers Focus:</b> We prioritize the needs and satisfaction of our customers,
                                    delivering products that truly enhance their quality of life.
                                </li>
                            </ul>
                        </div>
                        <div className="sep"></div>
                    </div>
                    <div className="image max-xl:hidden">
                        <img src={Image} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leaders;
