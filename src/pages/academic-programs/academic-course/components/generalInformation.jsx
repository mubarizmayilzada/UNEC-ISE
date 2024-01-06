import React, { useEffect, useState } from "react";

const GeneralInformation = ({ id }) => {
  const [courseInformation, setCourseInformation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://test-api.com/api/v1/course/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCourseInformation(data.courseİnformations); // Assuming you want the first item
        } else {
          // Handle errors if needed
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <section>
      <div className="flex flex-col gap-[24px]">
        {courseInformation.map((courseInfo) => (
          <div
            key={courseInfo.name}
            className="py-[32px] px-[24px] flex gap-[12px] flex-col bg-[#F8F6F8] rounded-[8px]"
          >
            <h2 className="text-[#551D3B] text-[32px] font-[600] leading-[40px]">
              {courseInfo.name}
            </h2>
            <p className="text-[#000] text-[16px] font-[400] leading-[24px]">
              {courseInfo.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GeneralInformation;
