import React from "react";

const Contact = () => {
  return (
    <section className="mx-[60px] mb-[54px]">
      <div>
        <h2 className="text-[#020618] text-[48px] font-lato font-[600] my-[24px]">
          Feel free to contact us
        </h2>
        <div className="flex justify-between">
          <form className="flex flex-col w-[756px] gap-[32px]">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label
                  className="text-[#1A0E15] text-[12px] font-lato font-[600] mb-[8px] leading-[15px]"
                  htmlFor=""
                >
                  First Name
                </label>
                <input
                  className="outline-none w-[350px] text-[12px] font-lato font-[600] mb-[8px] leading-[15px] py-[16px] px-[12px] border rounded-[8px] border-[#787B8E]"
                  type="text"
                  placeholder="enter name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#1A0E15] text-[12px] font-lato font-[600] mb-[8px] leading-[15px]"
                  htmlFor=""
                >
                  Last Name
                </label>
                <input
                  className="outline-none w-[350px] text-[12px] font-lato font-[600] mb-[8px] leading-[15px] py-[16px] px-[12px] border rounded-[8px] border-[#787B8E]"
                  type="text"
                  placeholder="enter name"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label
                  className="text-[#1A0E15] text-[12px] font-lato font-[600] mb-[8px] leading-[15px]"
                  htmlFor=""
                >
                  Email
                </label>
                <input
                  className="outline-none w-[350px] text-[12px] font-lato font-[600] mb-[8px] leading-[15px] py-[16px] px-[12px] border rounded-[8px] border-[#787B8E]"
                  type="text"
                  placeholder="sendme@mail.com"
                />
              </div>
              <div className="flex flex-col">
                <label
                  className="text-[#1A0E15] text-[12px] font-lato font-[600] mb-[8px] leading-[15px]"
                  htmlFor=""
                >
                  Phone Number
                </label>
                <input
                  className="outline-none w-[350px] text-[12px] font-lato font-[600] mb-[8px] leading-[15px] py-[16px] px-[12px] border rounded-[8px] border-[#787B8E]"
                  type="text"
                  placeholder="+994 (00) 000 00 00"
                />
              </div>
            </div>
            <div>
              <label
                className="inline-block text-[#1A0E15] text-[12px] font-lato font-[600] mb-[8px] leading-[15px]"
                htmlFor=""
              >
                Message
              </label>
              <textarea
                className="outline-none w-[100%] h-[136px] text-[12px] font-lato font-[600] mb-[8px] leading-[15px] py-[16px] px-[12px] border rounded-[8px] border-[#787B8E]"
                type="text"
                placeholder="I am reaching you for..."
              />
            </div>
            <input
              className="cursor-pointer rounded-[8px] w-[100%] py-[12px] px-[24px] bg-[#551D3B] text-[16px] font-[600] text-[#FFFDFD]"
              type="submit"
              value="Submit"
            />
          </form>
          <iframe
            title="unec"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.0253453647665!2d49.82447517594408!3d40.3861308714445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d5db87c65a1%3A0xc14de5f3054dec47!2sUnec!5e0!3m2!1sen!2saz!4v1699137207763!5m2!1sen!2saz"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            className="border-[0]"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
