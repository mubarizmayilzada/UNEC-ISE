import React, { useEffect, useState } from "react";
import Search from "../../assets/img/searchicon.svg";
import axios from "axios";
import SelectOi from "../../components/dropdown/select";

const StudentAlumni = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [year, setYear] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [yearOptions, setYearOptions] = useState([]);
  const [specialtyOptions, setSpecialtyOptions] = useState([]);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get("http://test-api.com/api/v1/student");
        const studentData = response.data.student.items;
        setStudents(studentData);

        const uniqueYears = [
          ...new Set(studentData.map((student) => student.enterTime)),
        ];
        setYearOptions(uniqueYears.map(year => ({ value: year, label: year })));

        const uniqueSpecialties = [
          ...new Set(studentData.map((student) => student.categoryName)),
        ];
        setSpecialtyOptions(uniqueSpecialties.map(specialty => ({ value: specialty, label: specialty })));
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  const filteredStudents = students.filter((student) => {
    return student.fullName.toLowerCase().includes(searchQuery.toLowerCase()) &&
           (year ? student.enterTime === year : true) &&
           (specialty ? student.categoryName === specialty : true);
  });

  const formatName = (name) => {
    return name
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <section className="mx-[60px] my-[70px]">
      <div className="flex justify-between items-center mb-[50px]">
        <p className="text-[#551d3b] text-[48px] font-[600] leading-[60px] text-left">
          Student Alumni
        </p>
        <div className="flex items-center">
          <div className="flex items-center mr-[8px] h-fit py-[10px] pl-[8px] pr-[24px] border-b-[2px] border-[#7F7E7E] w-[159px]">
            <label htmlFor="search">
              <img className="" src={Search} alt="" />
            </label>
            <input
              id="search"
              className="w-[100%] outline-none placeholder:text-[#7F7E7E] pl-[8px] text-[#7F7E7E] text-[14px] font-[600]"
              placeholder="Search for name"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <SelectOi
            options={yearOptions}
            setValue={setYear}
            label={"Year"}
            placeholder={"Year"}
          />
          <SelectOi
            options={specialtyOptions}
            setValue={setSpecialty}
            label={"Specialty"}
            placeholder={"Specialty"}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-[30px]">
        {filteredStudents.map((student) => (
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
