import React, { useState, useEffect } from "react";
import RedirectIconSrc from "../../assets/img/welcomeredirect.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const AcademicDiagrams = () => {
  const [academicPrograms, setAcademicPrograms] = useState([]);

  useEffect(() => {
    async function fetchAcademicPrograms() {
      try {
        const response = await axios.get(
          "http://test-api.com/api/v1/academicProgram"
        );
        setAcademicPrograms(response.data.academicPrograms.items);
      } catch (error) {
        console.error("Error fetching academic programs:", error);
      }
    }
    fetchAcademicPrograms();
  }, []);

  return (
    <section className="mt-[65px] ml-[60px] mb-[120px] mr-[60px]">
      <h2 className="text-[48px] text-center font-lato font-[600] leading-[60px] mb-[56px] text-[#551D3B]">
        Academic Programs
      </h2>
      <div className="flex flex-col gap-[32px]">
        {academicPrograms.map((program) => (
          <div key={program.id} className="flex w-[100%] h-[150px]">
            <img alt={program.name} src={program.file} />
            <div className="my-[24px] mx-[48px] flex flex-col gap-[12px] justify-between h-[100%]">
              <div className="flex gap-[12px] items-start flex-col ">
                <p className="text-[#551d3b] text-[24px] font-[600] leading-[30px] font-lato ">
                  {program.name}
                </p>
                <p className="text-[#1a0e15] text-[16px] font-lato font-[400] leading-[24px]">
                  <div
                    dangerouslySetInnerHTML={{ __html: program.description }}
                  ></div>
                </p>
                <Link
                  to={`/academic-programs/details/${program.id}`} // Add your link destination
                  className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end"
                >
                  Get More
                  <img alt="" className="w-[19px]" src={RedirectIconSrc} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicDiagrams;
