import React, { useEffect, useState } from "react";
import "./contentTable.css";

const ContentTable = ({ id }) => {
  const [courseContents, setCourseContents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://test-api.com/api/v1/course/${id}`);
        if (response.ok) {
          const data = await response.json();
          setCourseContents(data.courseContents); // Assuming you want the first item
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
              <th>№</th>
              <th>Topics</th>
            </tr>
          </thead>
          <tbody>
            {courseContents &&
              courseContents.map((course, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{course.topics}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ContentTable;
