import { useTranslation } from "react-i18next";

function Form() {
    const { t } = useTranslation();

    function formSubmit(e) {
        e.preventDefault();
    }

    return (
        <form className="flex flex-col" action="" onSubmit={formSubmit}>
            <label className="block text-[18px]" htmlFor="name">
                {t("الاسم")}
            </label>
            <input
                dir="ltr"
                className="mt-[5px] border-[1px] border-gray-400 bg-[#FAFAFA99] w-full max-w-[600px] text-[18px] p-[10px]"
                type="text"
                name="name"
                id="name"
            />
            <label className="block text-[18px] mt-[20px]" htmlFor="email">
                {t("البريد الإلكتروني")}
            </label>
            <input
                dir="ltr"
                className="mt-[5px] border-[1px] border-gray-400 bg-[#FAFAFA99] w-full max-w-[600px] text-[18px] p-[10px]"
                type="email"
                name="email"
                id="email"
            />
            <label className="block text-[18px] mt-[20px]" htmlFor="subject">
                {t("الموضوع")}
            </label>
            <input
                dir="ltr"
                className="mt-[5px] border-[1px] border-gray-400 bg-[#FAFAFA99] w-full max-w-[600px] text-[18px] p-[10px]"
                type="text"
                name="subject"
                id="subject"
            />
            <label className="block text-[18px] mt-[20px]" htmlFor="message">
                {t("الرسالة")}
            </label>
            <textarea
                className="mt-[5px] border-[1px] border-gray-400 bg-[#FAFAFA99] w-full max-w-[600px] text-[18px] p-[10px]"
                name="message"
                id="message"
            ></textarea>
            <button
                className="w-fit text-white bg-black py-[16px] px-[32px] text-[25px] font-[500] rounded-md mt-[20px]"
                type="submit"
            >
                {t("ارسال")}
            </button>
        </form>
    );
}

export default Form;
