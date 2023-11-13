import React from "react";
import Club from "../../assets/img/studentclubimg.png";

const StudentClub = () => {
  return (
    <section className="mx-[60px] mb-[150px]">
      <h2 className="text-[48px] text-center font-lato font-[600] leading-[60px] mb-[56px] text-[#551D3B]">
        Academic Staff
      </h2>
      <div className="flex justify-center gap-[32px] flex-wrap">
        <div className="w-[306px] h-[245px] rounded-[8px] relative">
          <img className="rounded-[8px] w-[100%] h-[100%]" src={Club} alt="" />
          <p className=" text-[24px] font-[700] leading-[30px] text-[#FFFDFE] py-[14px] px-[40px] bg-[#767173] absolute left-[0] bottom-0 w-[230px] rounded-tr-[8px] rounded-bl-[8px]">
            Data Science Community
          </p>
        </div>
        <div className="w-[306px] h-[245px] rounded-[8px] relative">
          <img className="rounded-[8px] w-[100%] h-[100%]" src={Club} alt="" />
          <p className=" text-[24px] font-[700] leading-[30px] text-[#FFFDFE] py-[14px] px-[40px] bg-[#767173] absolute left-[0] bottom-0 w-[230px] rounded-tr-[8px] rounded-bl-[8px]">
            Data Science Community
          </p>
        </div>
        <div className="w-[306px] h-[245px] rounded-[8px] relative">
          <img className="rounded-[8px] w-[100%] h-[100%]" src={Club} alt="" />
          <p className=" text-[24px] font-[700] leading-[30px] text-[#FFFDFE] py-[14px] px-[40px] bg-[#767173] absolute left-[0] bottom-0 w-[230px] rounded-tr-[8px] rounded-bl-[8px]">
            Data Science Community
          </p>
        </div>
        <div className="w-[306px] h-[245px] rounded-[8px] relative">
          <img className="rounded-[8px] w-[100%] h-[100%]" src={Club} alt="" />
          <p className=" text-[24px] font-[700] leading-[30px] text-[#FFFDFE] py-[14px] px-[40px] bg-[#767173] absolute left-[0] bottom-0 w-[230px] rounded-tr-[8px] rounded-bl-[8px]">
            Data Science Community
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentClub;
