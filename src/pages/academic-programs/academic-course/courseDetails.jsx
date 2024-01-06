import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import RArrow from "../../../assets/img/rightArrow.svg";
import GeneralInformation from "./components/generalInformation";
import ContentTable from "./components/contentTable";
import EvaluationCriteira from "./components/evaluationCriteira";
import axios from "axios";

const CourseDetails = ({ generalId }) => {
  const [displayInfo, setDisplayInfo] = useState(false);
  const { id } = useParams();
  const [displayGeneralInfo, setDisplayGeneralInfo] = useState(false);
  const [programData, setProgramData] = useState(null);
  const [displayTableOfContents, setDisplayTableOfContents] = useState(false);
  const [displayEvaluationCriteria, setDisplayEvaluationCriteria] =
    useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://test-api.com/api/v1/course/${id}`
        );

        setProgramData(response.data);
      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };
    fetchData();
  }, [id]);

  console.log(programData);

  useEffect(() => {
    setDisplayGeneralInfo(true);
  }, []);
  const handleDisplayGeneralInfo = () => {
    setDisplayGeneralInfo(true);
    setDisplayTableOfContents(false);
    setDisplayEvaluationCriteria(false);
  };

  const handleDisplayTableOfContents = () => {
    setDisplayGeneralInfo(false);
    setDisplayTableOfContents(true);
    setDisplayEvaluationCriteria(false);
  };

  const handleDisplayEvaluationCriteria = () => {
    setDisplayGeneralInfo(false);
    setDisplayTableOfContents(false);
    setDisplayEvaluationCriteria(true);
  };

  const handleDisplayInfo = () => {
    setDisplayInfo(true);
  };

  return (
    <section className="flex justify-between mx-[60px] gap-[110px] mt-[24px] mb-[100px]">
      <div>
        <div className="mb-[100px]">
          <Link className="flex gap-[12px]">
            <img src={RArrow} alt="" />
            <Link
              to={"/academic-programs"}
              className="text-[#7F7E7E] text-[16px] font-[500] leading-[24px]"
            >
              Back to the program
            </Link>
          </Link>
          <h3 className="mb-[24px] mt-[12px] text-[#551D3B] text-[16px] font-[700] leading-[20px]">
            {programData?.courceName || "Loading..."}
          </h3>
          <p>
            <span className="mr-[5px] inline-block text-[#551D3B] text-[16px] font-[600] leading-[20px]">
              Credit:
            </span>
            <span className="text-[#1A0E15] text-[16px] font-[600] leading-[20px]">
              {programData?.credit || "Loading..."}
            </span>
          </p>
          <p>
            <span className="mr-[5px] inline-block text-[#551D3B] text-[16px] font-[600] leading-[20px]">
              Professor:
            </span>
            <span className="text-[#1A0E15] text-[16px] font-[600] leading-[20px]">
              {programData?.coursuCreator || "Loading..."}
            </span>
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-[12px]">
            <Link
              to={`/course/details/${id}`}
              onClick={handleDisplayGeneralInfo}
              className={`py-[16px] pl-[60px] pr-[12px] text-[#1A0E15] text-[16px] font-[500] leading-[20px]  border-[black] text-right ${
                displayGeneralInfo && "border-r-[3px] font-[700]"
              }`}
            >
              General Information
            </Link>
            <Link
              to={`/course/details/${id}`}
              onClick={handleDisplayTableOfContents}
              className={`py-[16px] pl-[60px] pr-[12px] text-[#1A0E15] text-[16px] font-[500] leading-[20px]  border-[black] text-right ${
                displayTableOfContents && "border-r-[3px] font-[700]"
              }`}
            >
              Table of Contents
            </Link>
            <Link
              to={`/course/details/${id}`}
              onClick={handleDisplayEvaluationCriteria}
              className={`py-[16px] pl-[60px] pr-[12px] text-[#1A0E15] text-[16px] font-[500] leading-[20px]  border-[black] text-right ${
                displayEvaluationCriteria && "border-r-[3px] font-[700]"
              }`}
            >
              Evaluation Criteria
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[1010px]">
        {displayGeneralInfo && <GeneralInformation id={id} />}
        {displayTableOfContents && <ContentTable id={id} />}
        {displayEvaluationCriteria && <EvaluationCriteira id={id} />}
      </div>
    </section>
  );
};

export default CourseDetails;
