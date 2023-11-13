import React from "react";

const Subscribe = () => {
  return (
    <section className="flex justify-between px-[60px] py-[24px] items-center bg-[#FAF9FA]">
      <div className="w-[600px]">
        <p className="text-[#551d3b] text-[32px] font-[600] leading-[40px] text-left mb-[24px]">
          Subscribe to get latest news!
        </p>
        <p className="text-[16px] font-[400] leading-[24px] text-[#1A0E15] ">
          No time to check? Don’t worry, just write down your email and we will
          update you with the latest news and events.
        </p>
      </div>
      <div>
        <form action="" className="flex">
          <input
            className="outline-none w-[350px] text-[12px] font-lato font-[600] leading-[15px] py-[16px] px-[12px] border rounded-r-[0px] rounded-l-[8px] border-[#787B8E]"
            type="text"
            placeholder="sendme@mail.com"
          />
          <input
            type="submit"
            value="Subscribe"
            className="rounded-l-[0px] bg-[#551D3B] py-[16px] px-[12px] text-[12px] font-lato font-[600] rounded-r-[8px] leading-[15px] text-[#fff] cursor-pointer"
          />
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
