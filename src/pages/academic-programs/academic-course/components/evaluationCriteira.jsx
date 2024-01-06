import React, { useEffect, useState } from "react";
import "./contentTable.css";

const EvaluationCriteira = ({ id }) => {
  const [courseCriterias, setCourseCriterias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://test-api.com/api/v1/course/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCourseCriterias(data.courseCriterias); // Assuming you want the first item
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
      <div className="">
        <table className="table-content table-auto border-[1px] border-[black]">
          <thead>
            <tr>
              <th>Point</th>
              <th>Task Type</th>
            </tr>
          </thead>
          <tbody>
            {courseCriterias &&
              courseCriterias.map((course, index) => (
                <tr key={index}>
                  <td>{course.point}</td>
                  <td>{course.taskType}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default EvaluationCriteira;
