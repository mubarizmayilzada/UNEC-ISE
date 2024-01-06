import Club from "../../../assets/img/Homepageimg.png";
import ClubImg from "../../../assets/img/clubdetails.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Clubsingle = () => {
  const { id } = useParams();
  const [clubData, setClubData] = useState({});
  const [fileName, setFileName] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://test-api.com/api/v1/studentClub/${id}`
        );
        setClubData(response.data);
        setFileName(response.data.file);
      } catch (error) {
        console.error("Error fetching club data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(fileName);

  return (
    <section className="mb-[80px]">
      <div className="mb-[48px] relative">
        <img
          className="w-[100%] h-[320px] object-cover"
          src={fileName}
          alt=""
        />
        <div className="w-[100%] h-[320px] bg-[#000] opacity-60 absolute top-[0] left-[0]"></div>
        <span className="text-[48px] font-[700] leading-[60px] text-[#FFFDFE] absolute left-[60px] bottom-[37px] font-lato">
          {clubData.title}
        </span>
      </div>
      <section className="mx-[60px]">
        <div className="">
          {/* <p className="w-[50%] text-[16px] font-[400] leading-[24px] float-none">
            {clubData.description}
          </p> */}
          <div dangerouslySetInnerHTML={{ __html: clubData.description }}></div>

          {/* <img className="w-[50%] h-[320px]" src={fileName[1]} alt="" /> */}
        </div>
        {/* <br />
        <p className=" text-[16px] font-[400] leading-[24px]">
          {clubData.description}
        </p> */}
      </section>
    </section>
  );
};

export default Clubsingle;
