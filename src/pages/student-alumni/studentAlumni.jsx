import React, { useEffect, useState } from "react";
import Search from "../../assets/img/searchicon.svg";
import DropdownOi from "../../components/dropdown/dropdown";

import axios from "axios";

// Make an asynchronous function to fetch the student data
const fetchStudentData = async () => {
  try {
    const response = await axios.get("http://test-api.com/api/v1/student");
    const studentData = response.data.student.items; // Extracting the student items
    return studentData;
  } catch (error) {
    // Handle error cases here
    console.error("Error fetching student data:", error);
    return [];
  }
};

// const StudentComponent = () => {

const year = [
  {
    key: "1",
    label: <p>2020</p>,
    text: "year",
  },
];
const speciality = [
  {
    key: "2",
    label: <p>2020</p>,
    text: "speciality",
  },
];

const StudentAlumni = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("http://test-api.com/api/v1/student");
        const studentData = response.data.student.items;
        setStudents(studentData);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  const formatName = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section className="mx-[60px] my-[70px]">
      <div className="flex justify-between items-center mb-[50px] ">
        <p className="text-[#551d3b] text-[48px] font-[600] leading-[60px] text-left ">
          Student Alumni
        </p>

        <div className="flex items-center ">
          <div className="flex items-center mr-[8px] h-fit py-[10px] pl-[8px] pr-[24px] border-b-[2px] border-[#7F7E7E] w-[159px]">
            <label htmlFor="search">
              <img className="" src={Search} alt="" />
            </label>
            <input
              id="search"
              className="w-[100%]  outline-none placeholder:text-[#7F7E7E] pl-[8px] text-[#7F7E7E] text-[14px] font-[600]"
              placeholder="Search for name"
              type="text"
              name=""
            />
          </div>
          <DropdownOi items={year} />
          <DropdownOi items={speciality} />
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px]">
        {/* <div className="py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]">
          <div className="flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]">
            <h3>Tural</h3>
            <h3>Salmanov</h3>
          </div>
          <p className="text-[14px] font-[400] leading-[17px] text-[#575457]">
            Ecenomics
          </p>
          <p className="text-[14px] font-[400] leading-[17px] text-[#575457]">
            <span>2020</span>-<span>2024</span>
          </p>
        </div> */}
        {students.map((student) => (
          <div
            key={student.id}
            className="py-[24px] px-[32px] border-[1px] border-[#7F7E7E] rounded-[12px] flex flex-col items-center w-fit gap-[4px]"
          >
            <div className="flex gap-[5px] text-[20px] font-[600] leading-[25px] text-[#1A0E15]">
              <h3>{formatName(student.fullName)}</h3>
            </div>
            <p className="text-[14px] font-[400] leading-[17px] text-[#575457]">
              {student.categoryName}
            </p>
            <p className="text-[14px] font-[400] leading-[17px] text-[#575457]">
              <span>{student.enterTime}</span>-<span>{student.finishTime}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentAlumni;
