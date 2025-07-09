import Image from "../assets/images/Pills-TP.png";

function PharmacovigilancePage() {
    return (
        <div className="bg-[#00021d] text-white pt-[200px] pb-[100px]">
            <div className="container flex items-center gap-[20px]">
                <div className="flex-1">
                    <h2 className="text-[45px] font-[700]">Pharmacovigilance</h2>
                    <p className="text-[18px] max-w-[700px]">
                        Pharmacovigilance is the science and activities related to the detection, assessment,
                        understanding, and prevention of adverse effects or any other drug-related problems. This
                        includes:
                    </p>
                    <ol className="list-decimal pl-[40px] mt-[50px]">
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
        </div>
    );
}

export default PharmacovigilancePage;
