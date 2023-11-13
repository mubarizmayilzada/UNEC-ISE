import React from "react";
import RedirectIconSrc from "../../../assets/img/welcomeredirect.svg";
import FinanceImg from "../../../assets/img/finance.svg";
import Accounting from "../../../assets/img/accounting.svg";
import Business from "../../../assets/img/business.svg";
import Economics from "../../../assets/img/economics.svg";
import Logistics from "../../../assets/img/logistic.svg";

const UndergraduatePrograms = () => {
  return (
    <section className="mt-[65px] ml-[60px] mb-[120px] mr-[60px]">
      <p className="text-[#551d3b] text-[32px] font-[600] leading-[40px] text-left mb-[23px]">
        Undergraduate Programs
      </p>
      <div className="flex justify-between gap-[32px]">
        <div className="flex flex-col w-[238px] h-[453px]">
          <img alt="" src={FinanceImg} />
          <div className="my-[24px] mx-[16px] flex flex-col justify-between h-[100%]">
            <div className="flex gap-[12px] items-start flex-col ">
              <p className="text-[#551d3b] text-[24px] font-[600] leading-[30px] font-lato ">
                Finance
              </p>
              <p className="text-[#1a0e15] text-[16px] font-lato font-[400] leading-[24px]">
                Hey there! So you're interested in learning more about the
                finance undergraduate program? Well, let me give you a quick
                rundown of what to expect.
              </p>
            </div>
            <div className="flex justify-start">
              <div className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end">
                Get More
                <img alt="" className="w-[19px]" src={RedirectIconSrc} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[238px] h-[453px]">
          <img alt="" src={Accounting} />
          <div className="my-[24px] mx-[16px] flex flex-col justify-between h-[100%]">
            <div className="flex gap-[12px] items-start flex-col ">
              <p className="text-[#551d3b] text-[24px] font-[600] leading-[30px] font-lato ">
                Accounting
              </p>
              <p className="text-[#1a0e15] text-[16px] font-lato font-[400] leading-[24px]">
                Hey there! So you're interested in learning more about the
                finance undergraduate program? Well, let me give you a quick
                rundown of what to expect.
              </p>
            </div>
            <div className="flex justify-start">
              <div className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end">
                Get More
                <img alt="" className="w-[19px]" src={RedirectIconSrc} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[238px] h-[453px]">
          <img alt="" src={Business} />
          <div className="my-[24px] mx-[16px] flex flex-col justify-between h-[100%]">
            <div className="flex gap-[12px] items-start flex-col ">
              <p className="text-[#551d3b] text-[24px] font-[600] leading-[30px] font-lato ">
                Business Management
              </p>
              <p className="text-[#1a0e15] text-[16px] font-lato font-[400] leading-[24px]">
                Hey there! So you're interested in learning more about the
                finance undergraduate program? Well, let me give you a quick
                rundown of what to expect.
              </p>
            </div>
            <div className="flex justify-start">
              <div className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end">
                Get More
                <img alt="" className="w-[19px]" src={RedirectIconSrc} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[238px] h-[453px]">
          <img alt="" src={Economics} />
          <div className="my-[24px] mx-[16px] flex flex-col justify-between h-[100%]">
            <div className="flex gap-[12px] items-start flex-col ">
              <p className="text-[#551d3b] text-[24px] font-[600] leading-[30px] font-lato ">
                Economics
              </p>
              <p className="text-[#1a0e15] text-[16px] font-lato font-[400] leading-[24px]">
                Hey there! So you're interested in learning more about the
                finance undergraduate program? Well, let me give you a quick
                rundown of what to expect.
              </p>
            </div>
            <div className="flex justify-start">
              <div className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end">
                Get More
                <img alt="" className="w-[19px]" src={RedirectIconSrc} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[238px] h-[453px]">
          <img alt="" src={Logistics} />
          <div className="my-[24px] mx-[16px] flex flex-col justify-between h-[100%]">
            <div className="flex gap-[12px] items-start flex-col ">
              <p className="text-[#551d3b] text-[24px] font-[600] leading-[30px] font-lato ">
                Logistics
              </p>
              <p className="text-[#1a0e15] text-[16px] font-lato font-[400] leading-[24px]">
                Hey there! So you're interested in learning more about the
                finance undergraduate program? Well, let me give you a quick
                rundown of what to expect.
              </p>
            </div>
            <div className="flex justify-start">
              <div className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end">
                Get More
                <img alt="" className="w-[19px]" src={RedirectIconSrc} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UndergraduatePrograms;
