import React from "react";
import Event from "../../../assets/img/event.png";

const NewsletterDetails = () => {
  return (
    <div>
      <div className="h-[400px] w-[100%] relative mb-[70px]">
        <img className="w-[100%] h-[100%]" src={Event} alt="" />
        <div className="w-[100%] h-[100%] bg-[#00000050] absolute top-[0] left-[0]"></div>
        <div className="absolute left-[48px] bottom-[56px]">
          <p className="text-[48px] font-[600] leading-[60px] text-[#FFFDFE] w-[730px]">
            “ISE Celebrates Graduation with an Unforgettable Party!”
          </p>
          <div className="mt-[20px]">
            <span className="rounded-[8px] text-[14px] font-[500] leading-[17px] text-[#FFFDFE] inline-block py-[8px] px-[14px] bg-[#f7f3f818]">
              Entertainment
            </span>
            <span className="text-[#FFFDFE] inline-block mx-[10px]">•</span>
            <span className="text-[16px] font-[500] leading-[20px] text-[#FFFDFE]">
              2 aug
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterDetails;
