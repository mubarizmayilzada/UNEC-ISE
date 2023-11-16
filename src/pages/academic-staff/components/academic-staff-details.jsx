import { Collapse } from "antd";
import "./index.css";
import Linkedin from "../../../assets/img/linkedinlogo.svg";
import Staff from "../../../assets/img/staff.png";
import Cv from "../../../assets/img/cv.svg";
import academicIcon from "../../../assets/img/academiconsGoogleScholar1.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function AcademicStaffDetails() {
  const { id } = useParams();
  const [staffDetails, setStaffDetails] = useState(null);

  const items = [
    {
      key: "1",
      label: "Biography",
      children: (
        <p className="text-[#000] text-[16px] font-[400] leading-[24px]"></p>
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://test-api.com/api/v1/Academic/${id}`
        );
        setStaffDetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!staffDetails) {
    return <div>Loading...</div>; // Display a loading indicator while data is being fetched
  }

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="flex mx-[60px] gap-[54px]">
      <div className="">
        <div className="py-[24px] px-[32px] rounded-[12px] w-[308px]">
          <img
            className="mx-[auto] w-[200px] h-[200px] mb-[12px]"
            src={staffDetails.file}
            alt=""
          />
          <div className="text-center">
            <div>
              <h3 className="text-[#1A0E15] text-[20px] font-lato font-[600] leading-[25px] mb-[5px]">
                {staffDetails.fullName}
              </h3>
              <p className="text-[#575457] text-[14px] font-lato font-[400] leading-[17px]">
                {staffDetails.position}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[12px] mt-[24px]">
              <Link
                to={staffDetails.linkedinLink}
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#0A66C2] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={Linkedin} alt="" />
                Linkedin Profile
              </Link>
              <Link
                to={staffDetails.googLeScholarLink}
                className="whitespace-nowrap rounded-[8px] px-[16px] py-[12px] bg-[#7F7E7E] flex justify-center gap-[10px] text-[14px] font-lato font-[500] leading-[17px] text-[#F8F8F9]"
              >
                <img src={academicIcon} alt="" />
                Google Scholar
              </Link>
              <Link
                to={staffDetails.cvLink}
                className="whitespace-nowrap	 px-[16px] py-[12px] border-[1px] border-[#7F7E7E] text-[#7F7E7E] text-[14px] font-lato font-[500] leading-[17px] rounded-[8px] flex justify-center gap-[10px]"
              >
                <img src={Cv} alt="" />
                <span>CV</span>
              </Link>
            </div>
          </div>
          <div className="mb-[100px] text-[#1A0E15] text-[16px] font-lato font-[400] leading-[24px] mt-[64px]">
            <p>
              <span className="border-b-[1px] border-[#1A0E15] ">
                {staffDetails.email}
              </span>
            </p>
            <p>
              Assistant:
              <span
                className="inline-block ml-[5px] border-b-[1px] border-[#1A0E15]"
                title="jwbaker1@stanford.edu"
              >
                {staffDetails.assistant}
              </span>
            </p>
            <p>
              Office:
              <span className="ml-[5px]">{staffDetails.office}</span>
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
