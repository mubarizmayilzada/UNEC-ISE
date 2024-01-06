import Cv from "../../assets/img/cv.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SyllabusTable from "./components/syllabusTable";
import { Link, useParams } from "react-router-dom";

const AcademicProgramDetails = () => {
  const [programData, setProgramData] = useState(null);
  const [courses, setCourses] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://test-api.com/api/v1/academicProgram/${id}`
        );
        setProgramData(response.data);
      } catch (error) {
        console.error("Error fetching program data:", error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `http://test-api.com/api/v1/course/GetAllCourse/${id}`
        );
        const sortedCourses = response.data.reduce((acc, course) => {
          const categoryId = course.courseCategoryId;
          if (!acc[categoryId]) {
            acc[categoryId] = [];
          }
          acc[categoryId].push(course);
          return acc;
        }, {});
        setCourses(sortedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchData();
    fetchCourses();
  }, [id]);

  return (
    <section className="px-[60px]">
      <div className="flex gap-[36px] items-center py-[24px] mb-[16px]">
        <img
          className="w-[136px] h-[100px] object-cover"
          src={programData?.file}
          alt=""
        />
        <h2 className="text-[#551D3B] text-[64px] font-[600] leading-[80px]">
          {programData?.name || "Loading..."}
        </h2>
      </div>
      <p className="text-[16px] font-[400] leading-[24px]">
        <div
          dangerouslySetInnerHTML={{ __html: programData?.shortDescription }}
        />
      </p>
      <div className="flex justify-between gap-[32px] mt-[32px]">
        <div className="flex-1">
          <h3 className="text-[#551D3B] text-[32px] font-[600] leading-[40px] mb-[12px]">
            Double diploma programs
          </h3>
          <p className="text-[16px] font-[400] leading-[24px]">
            <div
              dangerouslySetInnerHTML={{ __html: programData?.doubleDiplome }}
            />
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-[#551D3B] text-[32px] font-[600] leading-[40px] mb-[12px]">
            Exchange Programs
          </h3>
          <p className="text-[16px] font-[400] leading-[24px]">
            <div
              dangerouslySetInnerHTML={{ __html: programData?.exchangeProgram }}
            />
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center my-[40px]">
        <h2 className="text-[#551D3B] text-[32px] font-[600] leading-[40px]">
          Academic Syllabus
        </h2>
        <div>
          <Link
            to={"research.readLink"}
            className="flex justify-center rounded-[8px] cursor-pointer gap-[10px] items-center h-fit border-[1px] border-[#7F7E7E] text-[#7F7E7E] w-[101px] py-[12px] px-[16px]"
          >
            <img src={Cv} alt="" className="h-fit" />
            Print
          </Link>
        </div>
      </div>
      <div className="flex gap-[34px] flex-wrap mb-[105px]">
        {Object.entries(courses).map(([categoryId, categoryCourses]) => (
          <SyllabusTable
            key={categoryId}
            courses={categoryCourses}
            categoryName={categoryCourses[0].courseCategoryName} // Assuming the name is the same for all courses in a category
          />
        ))}
      </div>
    </section>
  );
};

export default AcademicProgramDetails;
