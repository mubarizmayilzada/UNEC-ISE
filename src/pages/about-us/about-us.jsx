// import React from "react";

// const AboutUs = () => {

//   return (
//     <>
//       <section className="w-[710px] mx-[auto] text-center mt-[24px]">
//         <h2 className="text-[48px] font-lato font-[600] leading-[60px] mb-[24px] text-[#551D3B]">
//           Who we are
//         </h2>
//         <p className="text-[16px] font-lato font-[400] leading-[24px] text-[#1A0E15]">
//           Established in 2014, our esteemed institution has grown to become a
//           beacon of excellence in the field of economics. At the heart of our
//           school's mission is a commitment to fostering a truly global
//           perspective, empowering our students to navigate the complex and
//           ever-changing economic landscape with confidence and finesse. <br />
//           <br /> Our accomplished faculty is composed of world-renowned scholars
//           and industry experts, each dedicated to nurturing the intellectual
//           curiosity and growth of our students. By integrating cutting-edge
//           research, real-world experience, and a broad array of economic
//           paradigms, we provide our students with an unparalleled educational
//           experience that prepares them for success in a variety of careers and
//           industries.
//         </p>
//       </section>
//       <section className="w-[710px] mx-[auto] flex gap-[129px] mb-[100px] mt-[70px]">
//         <div>
//           <h3 className="text-[32px] font-lato font-[600] leading-[40px] mb-[24px] text-[#551D3B]">
//             Mission & Vision
//           </h3>
//           <p className="text-[16px] font-lato font-[400] leading-[24px] text-[#1A0E15]">
//             Established in 2014, our esteemed institution has grown to become a
//             beacon of excellence in the field of economics. At the heart of our
//             school's mission is a commitment to fostering a truly global
//             perspective, empowering our students to navigate the complex and
//             ever-changing economic landscape with confidence and finesse.
//           </p>
//         </div>
//         <div>
//           <h3 className="text-[32px] font-lato font-[600] leading-[40px] mb-[24px] text-[#551D3B]">
//             Values
//           </h3>
//           <p className="text-[16px] font-lato font-[400] leading-[24px] text-[#1A0E15]">
//             Established in 2014, our esteemed institution has grown to become a
//             beacon of excellence in the field of economics. At the heart of our
//             school's mission is a commitment to fostering a truly global
//             perspective, empowering our students to navigate the complex and
//             ever-changing economic landscape with confidence and finesse.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AboutUs;

import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeSlider from "../homePage/components/homeSlider";
import AboutSlider from "./components/aboutSlider";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://test-api.com/api/v1/about");
        setAboutData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {aboutData && (
        <>
          <section className="w-[710px] mx-[auto] text-center mt-[24px]">
            <h2 className="text-[48px] font-lato font-[600] leading-[60px] mb-[24px] text-[#551D3B]">
              {"Who we are"}
            </h2>
            <p className="text-[16px] font-lato font-[400] leading-[24px] text-[#1A0E15]">
              {/* html coming from api, show it below */}
              <div dangerouslySetInnerHTML={{ __html: aboutData.title }}></div>
            </p>
          </section>

          <AboutSlider />

          <section className="w-[710px] mx-[auto] flex gap-[129px] mb-[100px] mt-[70px]">
            <div>
              <h3 className="text-[32px] font-lato font-[600] leading-[40px] mb-[24px] text-[#551D3B]">
                Mission & Vision
              </h3>
              <p className="text-[16px] font-lato font-[400] leading-[24px] text-[#1A0E15]">
                {aboutData.missionVision}
              </p>
            </div>
            <div>
              <h3 className="text-[32px] font-lato font-[600] leading-[40px] mb-[24px] text-[#551D3B]">
                Values
              </h3>
              <p className="text-[16px] font-lato font-[400] leading-[24px] text-[#1A0E15]">
                {aboutData.values}
              </p>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AboutUs;
