import DarkSection from "../components/Home/DarkSection";
import FirstSection from "../components/Home/FirstSection";
import Landing from "../components/Home/Landing";
import SecondSection from "../components/Home/SecondSection";
import MedicineImage from "../assets/images/Medicine.jpeg";
import WomenImage from "../assets/images/Women.jpg";
import ManImage from "../assets/images/Man.jpg";
import ChildrenImage from "../assets/images/Children.jpg";
import AtheleteImage from "../assets/images/Athelete.jpg";

function Home({ lang }) {
    return (
        <div>
            <Landing />
            <FirstSection
                header={`جاهز للحياة، جاهز ببيسكادو`}
                description="مجموعة بيسكادو من المكملات الغذائية المنوعة أساسية لدعم صحة عيلتك كل يوم"
                buttonText="اكتشف منتجاتنا الان"
                image={MedicineImage}
                bgColor="#f5f5f5"
                order="0"
            />
            <DarkSection />
            <SecondSection lang={lang} />
            <FirstSection
                header="هي بلا حدود"
                description="مجموعة من أهم الڤيتامينات الأساسية للعناية بالشعر والبشرة وكل ما يخص جمالك وصحتك"
                buttonText="اعرفي أكتر"
                image={WomenImage}
                bgColor="#ecf1f4"
                order="0"
            />
            <FirstSection
                header="هو بلا حدود"
                description="كل اللي جسمك محتاجه من الڤيتامينات والمعادن الأساسية لأداء وقوة وطاقة أفضل"
                buttonText="اعرف أكتر"
                image={ManImage}
                bgColor="#f5f5f5"
                order="1"
            />
            <FirstSection
                header="طفلك بلا حدود"
                description="مكملات غذائية مثالية لضمان نمو سليم وآمن لطفلك"
                buttonText="اعرف اكتر"
                image={ChildrenImage}
                bgColor="#ecf1f4"
                order="0"
            />
            <FirstSection
                header="لياقة بلا حدود"
                description="حقق هدفك, وعدي حدودك مع مكملات بيسكادو الغذائية اللي هتساعدك علي تحسين لياقتك البدنية"
                buttonText="اكتشف منتجاتنا"
                image={AtheleteImage}
                bgColor="#f5f5f5"
                order="1"
            />
        </div>
    );
}

export default Home;
