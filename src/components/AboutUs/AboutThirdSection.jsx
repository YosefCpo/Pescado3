import { useTranslation } from "react-i18next";

function AboutThirdSection({ language }) {
    const { t } = useTranslation();

    return (
        <div className="px-[50px] flex flex-col gap-[60px] text-center">
            <div className="flex flex-col items-center">
                <h2 className="text-[30px] font-[700]">Vision</h2>
                <p className="max-w-[600px]">
                    We Are Committed To Be A Pioneer And Innovative Company In Pharmaceutical Industries.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="text-[30px] font-[700]">Mission</h2>
                <p className="max-w-[600px]">
                    We are constantly striving to offer valuable and innovative products which will be satisfying to
                    both patients, and health care providers, as it has been our belief to improve quality of life,
                    through healthy, trustworthy, and ambitious working environment.
                </p>
            </div>
            <div className="flex flex-col items-center gap-[20px] mb-[50px]">
                <h2 className="text-[30px] font-[700] underline mb-[15px]">Values</h2>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">Innovation</h3>
                    <p>
                        We continuously seek and embrace new ideas to develop cutting-edge solutions in the
                        pharmaceutical industry.
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">Quality</h3>
                    <p>
                        We are dedicated to providing high-quality products that improve the health and well-being of
                        patients and meet the needs of healthcare providers.
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">Integrity</h3>
                    <p>
                        We uphold the highest ethical standards and practices, ensuring trustworthiness in all our
                        actions and products.
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">Collaboration</h3>
                    <p>
                        We believe in the power of teamwork and partnership, working together with colleagues, patients,
                        and healthcare providers to achieve common goals.
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">Respect</h3>
                    <p>
                        We value and respect the diverse perspectives of our employees, patients, and partners,
                        fostering an inclusive and supportive environment.
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">Commitment</h3>
                    <p>
                        We are committed to our mission and vision, consistently striving to excel and make a positive
                        impact on the pharmaceutical industry.
                    </p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">Sustainability</h3>
                    <p>We are dedicated to sustainable practices that benefit our community and the environment.</p>
                </p>
                <p className="max-w-[600px]">
                    <h3 className="text-[20px] font-[500]">Customer Focus</h3>
                    <p>
                        We prioritize the needs and satisfaction of our customers, delivering products that truly
                        enhance their quality of life.
                    </p>
                </p>
            </div>
        </div>
    );
}

export default AboutThirdSection;
