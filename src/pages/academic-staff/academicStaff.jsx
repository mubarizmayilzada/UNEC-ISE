import React from "react";
import Linkedin from "../../assets/img/linkedinlogo.svg";
import Staff from "../../assets/img/staff.png";
import Cv from "../../assets/img/cv.svg";
import academicIcon from "../../assets/img/academiconsGoogleScholar1.svg";
import { Link } from "react-router-dom";
const AcademicStaff = () => {
  return (
    <>
      <h2 className="text-[48px] text-center font-lato font-[600] leading-[60px] mb-[56px] text-[#551D3B]">
        Academic Staff
      </h2>
      <section className="flex mx-[60px] mb-[35px] justify-center gap-[33px] flex-wrap">
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={Staff}
            alt=""
          />
          <div className="text-center">
            <Link to="/academic-staff/details/">
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                Dr. Khatai Aliyev
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                Director of the UNEC Empirical Research Center
              </p>
            </Link>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </a>
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Schoolarship
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={Staff}
            alt=""
          />
          <div className="text-center">
            <div>
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                Dr. Khatai Aliyev
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                Director of the UNEC Empirical Research Center
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </a>
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Schoolarship
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={Staff}
            alt=""
          />
          <div className="text-center">
            <div>
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                Dr. Khatai Aliyev
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                Director of the UNEC Empirical Research Center
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </a>
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Schoolarship
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={Staff}
            alt=""
          />
          <div className="text-center">
            <div>
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                Dr. Khatai Aliyev
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                Director of the UNEC Empirical Research Center
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </a>
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Schoolarship
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={Staff}
            alt=""
          />
          <div className="text-center">
            <div>
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                Dr. Khatai Aliyev
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                Director of the UNEC Empirical Research Center
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </a>
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Schoolarship
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={Staff}
            alt=""
          />
          <div className="text-center">
            <div>
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                Dr. Khatai Aliyev
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                Director of the UNEC Empirical Research Center
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </a>
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Schoolarship
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={Staff}
            alt=""
          />
          <div className="text-center">
            <div>
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                Dr. Khatai Aliyev
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                Director of the UNEC Empirical Research Center
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </a>
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Schoolarship
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={Staff}
            alt=""
          />
          <div className="text-center">
            <div>
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                Dr. Khatai Aliyev
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                Director of the UNEC Empirical Research Center
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </a>
              <a
                href="https://salam"
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Schoolarship
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademicStaff;
