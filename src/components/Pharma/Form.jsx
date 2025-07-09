import React from "react";

function Form() {
    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <div className="py-[150px]">
            <form
                onSubmit={submitForm}
                className="py-[100px] px-[100px] border-[1px] border-gray-50 rounded-3xl flex flex-col gap-[30px]"
            >
                <input
                    className="text-[18px] bg-transparent border-b-[1px] border-gray-50 py-[5px] px-[30px] focus:outline-none"
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                />
                <button
                    className="w-fit self-end bg-white text-black py-[10px] px-[25px] rounded-3xl text-[18px] font-[600]"
                    type="submit"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}

export default Form;
