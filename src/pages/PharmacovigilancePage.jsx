import Image from "../assets/images/Pills-TP.png";
import Form from "../components/Pharma/Form";

function PharmacovigilancePage() {
    return (
        <div className="bg-[#00021d] text-white pt-[200px] pb-[100px]">
            <div className="container">
                <div className="flex items-center gap-[20px] max-md:flex-col max-md:items-center">
                    <div className="flex-1">
                        <h2 className="text-[45px] font-[700]">Pharmacovigilance</h2>
                        <p className="text-[18px] max-w-[700px]">
                            Pharmacovigilance is the science and activities related to the detection, assessment,
                            understanding, and prevention of adverse effects or any other drug-related problems. This
                            includes:
                        </p>
                        <ol className="list-decimal pl-[40px] mt-[50px] text-[18px]">
                            <li>Monitoring drug safety</li>
                            <li>Identifying potential side effects</li>
                            <li>Analyzing data to understand risks</li>
                            <li>Taking actions to minimize risks</li>
                            <li>Communicating safety information to healthcare professionals and patients</li>
                        </ol>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img className="max-w-full" src={Image} alt="Pills" />
                    </div>
                </div>
                <div>
                    <h2 className="text-center mx-auto mt-[100px] text-[30px] max-w-[900px]">
                        Pescado has a Pharmacovigilance team's his ultimate goal is to ensure the safe use of
                        medications and protect public health primary through:
                    </h2>
                    <ol className="list-decimal pl-[40px] mt-[70px] text-[18px] flex flex-col gap-[15px]">
                        <li>Collecting and analyzing adverse event reports</li>
                        <li>Identifying and assessing potential safety risks</li>
                        <li>Conducting signal detection and risk management</li>
                        <li>Preparing and submitting safety reports to regulatory authorities</li>
                        <li>Collaborating with regulatory agencies, healthcare professionals, and patients</li>
                        <li>Developing and implementing risk minimization strategies</li>
                        <li>Providing safety updates and training to stakeholders</li>
                        <li>Continuously monitoring drug safety profiles</li>
                    </ol>
                </div>
                <Form />
                <div className="text-center text-[18px] font-[500]">Email: PV@pescadopharma.com</div>
            </div>
        </div>
    );
}

export default PharmacovigilancePage;
