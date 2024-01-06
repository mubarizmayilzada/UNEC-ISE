// import React from "react";
// import "./index.css";

// const SyllabusTable = () => {
//   return (
//     <section className="w-[680px]">
//       <h3 className="text-[#1A0E15] text-[24px] font-[600] leading-[30px] mb-[8px]">
//         I Academic Year
//       </h3>
//       <div className="">
//         <table className="table-auto  border-[1px] border-[black]">
//           <thead>
//             <tr>
//               <th>Course Name</th>
//               <th>Credit</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
//               <td>3</td>
//             </tr>
//             <tr>
//               <td>Witchy Woman</td>
//               <td>2</td>
//             </tr>
//             <tr>
//               <td>Shining Star</td>
//               <td>5</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </section>
//   );
// };

// export default SyllabusTable;

import React from "react";
import "./syllabusTable.css";
import { Link } from "react-router-dom";

const SyllabusTable = ({ courses, categoryName }) => {
  return (
    <section className="w-[680px]">
      <h3 className="text-[#1A0E15] text-[24px] font-[600] leading-[30px] mb-[8px]">
        {categoryName}
      </h3>
      <div className="">
        <table className="syllabus-table table-auto border-[1px] border-[black]">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {courses &&
              courses.map((course, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/course/details/${course.courseId}`}>
                      {course.courceName}
                    </Link>
                  </td>
                  <td>{course.credit}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SyllabusTable;
