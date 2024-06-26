import React, { useEffect, useState } from "react";
import Linkedin from "../../assets/img/linkedinlogo.svg";
import Staff from "../../assets/img/staff.png";
import Cv from "../../assets/img/cv.svg";
import academicIcon from "../../assets/img/academiconsGoogleScholar1.svg";
import { Link } from "react-router-dom";
import axios from "axios";
const AcademicStaff = () => {
  const [academicData, setAcademicData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://test-api.com/api/v1/Academic");
        setAcademicData(response.data.academic.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="text-[48px] text-center font-lato font-[600] leading-[60px] mb-[56px] text-[#551D3B]">
        Academic Staff
      </h2>
      <section className="flex mx-[60px] mb-[35px] justify-center gap-[33px] flex-wrap">
        {academicData.map((staff, index) => (
          <div
            key={index}
            className="flex flex-col justify-between py-[24px] px-[32px] rounded-[12px] w-[308px] border-[1px] border-[#7F7E7E]"
          >
            <div className="text-center">
              <img
                className="mx-[auto] w-[200px] h-[200px] mb-[12px] rounded-[5px]"
                src={staff.file}
                alt=""
              />
              <Link to={`/academic-staff/details/${staff.id}`}>
                <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]  hover:text-[#551D3B]">
                  {staff.fullName}
                </h3>
                <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]  hover:text-[#551D3B]">
                  {staff.position}
                </p>
              </Link>
            </div>
            <div className="text-center flex flex-col justify-between gap-[12px] mt-[24px]">
              <Link
                to={staff.linkedinLink}
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </Link>
              <Link
                to={staff.googLeScholarLink}
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Scholarship
              </Link>
              <Link
                to={staff.cvLink}
                className="whitespace-nowrap px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]"
              >
                <img src={Cv} alt="" />
                <span>CV</span>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default AcademicStaff;
