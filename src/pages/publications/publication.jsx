import Search from "../../assets/img/searchicon.svg";
import DropdownOi from "../../components/dropdown/dropdown";
import Cv from "../../assets/img/cv.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const category = [
  {
    key: "2",
    label: <p>2020</p>,
    text: "speciality",
  },
];

const Publication = () => {
  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const response = await axios.get("http://test-api.com/api/v1/research");
        const researchItems = response.data.researhs.items;
        setResearchData(researchItems);
      } catch (error) {
        console.error("Error fetching research data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearchData();
  }, []);

  const groupedResearchData = researchData.reduce((acc, research) => {
    const { researchDateYearCategoryName } = research;
    if (!acc[researchDateYearCategoryName]) {
      acc[researchDateYearCategoryName] = [];
    }
    acc[researchDateYearCategoryName].push(research);
    return acc;
  }, {});

  const sortedYearCategories = Object.keys(groupedResearchData).sort(
    (a, b) => b - a
  );

  let mainYear = sortedYearCategories.map((year, index) => ({
    key: `${index + 1}`,
    label: <p>{year}</p>,
    text: "year",
  }));

  if (loading) {
    mainYear = [
      {
        key: "1",
        label: <p>Loading...</p>,
        text: "year",
      },
    ];
  }
  return (
    <section className="mx-[60px] my-[70px]">
      <div className="flex justify-between items-center mb-[50px] ">
        <p className="text-[#551d3b] text-[48px] font-[600] leading-[60px] text-left ">
          Publications
        </p>
        <div className="flex items-center ">
          <div className="flex items-center mr-[8px] h-fit py-[10px] pl-[8px] pr-[24px] border-b-[2px] border-[#7F7E7E] w-[159px]">
            <label htmlFor="search">
              <img className="" src={Search} alt="" />
            </label>
            <input
              id="search"
              className="w-[100%]  outline-none placeholder:text-[#7F7E7E] pl-[8px] text-[#7F7E7E] text-[14px] font-[600]"
              placeholder="Search for title"
              type="text"
              name=""
            />
          </div>
          <DropdownOi items={mainYear} />
          <DropdownOi items={category} />
        </div>
      </div>
      <div className="flex flex-col gap-[48px]">
        {sortedYearCategories.map((yearCategory) => (
          <div>
            <h2 className="mb-[8px] text-[#1A0E15] text-[32px] font-[600] leading-[40px]">
              {yearCategory}
            </h2>
            <div className="flex flex-col gap-[16px] ">
              {groupedResearchData[yearCategory].map((research) => (
                <div
                  key={research.id}
                  className="py-[32px] px-[24px] flex justify-between bg-[#F8F6F8] rounded-[16px] items-center"
                >
                  <div>
                    <span className="text-[14px] font-[400] leading-[17px]">
                      {research.creationDate}
                    </span>
                    <h3 className="text-[20px] font-[600] leading-[25px] text-[#1A0E15] mt-[8px]">
                      {research.title}
                    </h3>
                    <p className="text-[16px] font-[500] leading-[20px] text-[#551D3B] mt-[12px]">
                      {research.description}
                    </p>
                  </div>
                  <Link
                    to={research.readLink}
                    className="flex justify-center rounded-[8px] cursor-pointer gap-[10px] items-center h-fit border-[1px] border-[#7F7E7E] text-[#7F7E7E] w-[144px] py-[12px] px-[16px]"
                  >
                    <img src={Cv} alt="" className="h-fit" />
                    Read
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publication;
