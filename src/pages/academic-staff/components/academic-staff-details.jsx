import { Collapse } from "antd";
import React from "react";
import "./index.css";
import Linkedin from "../../../assets/img/linkedinlogo.svg";
import Staff from "../../../assets/img/staff.png";
import Cv from "../../../assets/img/cv.svg";
import academicIcon from "../../../assets/img/academiconsGoogleScholar1.svg";

const items = [
  {
    key: "1",
    label: "Biography",
    children: (
      <p className="text-[#000] text-[16px] font-[400] leading-[24px]">
        Khatai Aliyev is an associate professor and head of the International
        Economics and Business Department at the Azerbaijan State University of
        Economics (UNEC), and the founding director of the UNEC Empirical
        Research Center. He is also co-founder and director of ASERC LLC and the
        editor-in-chief of the "ASERC Journal of Socio-Economic Studies." His
        research interests include welfare economics, life satisfaction, public
        policy, and empirical modeling.
        <br />
        <br />
        Khatai holds an undergraduate degree (BSc) in Economics from Qafqaz
        University, a postgraduate degree (MSc) in Economics from Eastern
        Mediterranean University, and a Ph.D. from the Azerbaijan National
        Academy of Sciences. Having a long-standing teaching experience, Khatai
        also participated in international mobility programs at Indiana
        University Bloomington (Fulbright Visiting Scholar), the University of
        Bologna, and the University of Dunaujvaros (Erasmus+ HE Staff Mobility
        Program).
        <br />
        <br />
        Khatai authored 2 books, 46 research papers published in peer-reviewed
        journals, and 5 conference materials.
      </p>
    ),
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{"text"}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{"text"}</p>,
  },
];
export default function AcademicStaffDetails() {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="flex mx-[60px] gap-[54px]">
      <div className="">
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px]">
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
                Google Scholar
              </a>
              <div className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]">
                <img src={Cv} alt="" />
                <span>CV</span>
              </div>
            </div>
          </div>
          <div className="mb-[100px] text-[#1A0E15] text-[16px] font-lato font-[400] leading-[24px] mt-[64px]">
            <p>
              <span className="border-b-[1px] border-[#1A0E15] ">
                subini@stanford.edu
              </span>
            </p>
            <p>
              Assistant:
              <span
                className="inline-block ml-[5px] border-b-[1px] border-[#1A0E15]"
                title="jwbaker1@stanford.edu"
              >
                John Baker
              </span>
            </p>
            <p>
              Office:
              <span className="ml-[5px]">CERAS 516</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <h3 className="text-[#551D3B] text-[48px] font-[600] leading-[60px] font-lato my-[10px] mb-[26px]">
          Academic Staff
        </h3>
        <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
      </div>
    </div>
  );
}
