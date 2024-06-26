import React, { useEffect, useState } from "react";
import RedirectIconSrc from "../../../assets/img/welcomeredirect.svg";
import FinanceImg from "../../../assets/img/finance.svg";
import Accounting from "../../../assets/img/accounting.svg";
import Business from "../../../assets/img/business.svg";
import Economics from "../../../assets/img/economics.svg";
import Logistics from "../../../assets/img/logistic.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const UndergraduatePrograms = () => {
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
      <p className="text-[#551d3b] text-[32px] font-[600] leading-[40px] text-left mb-[23px]">
        Undergraduate Programs
      </p>
      <div className="flex justify-between gap-[32px]">
        {academicPrograms.map((program) => (
          <div className="flex flex-col w-[238px] h-[453px]" key={program.id}>
            <img
              className="object-cover w-[238px] h-[150px]"
              alt={program.name}
              src={program.file}
            />
            <div className="my-[24px] mx-[16px] flex flex-col justify-between h-[100%]">
              <div className="flex gap-[12px] items-start flex-col ">
                <p className="text-[#551d3b] text-[24px] font-[600] leading-[30px] font-lato ">
                  {program.name}
                </p>
                <p className="text-[#1a0e15] text-[16px] font-lato font-[400] leading-[24px]">
                  <div
                    dangerouslySetInnerHTML={{ __html: program.description }}
                  ></div>
                </p>
              </div>
              <div className="flex justify-start">
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

export default UndergraduatePrograms;
