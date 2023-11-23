import Event from "../../../assets/img/event.png";
import Clock from "../../../assets/img/tabler_clock-hour-8.svg";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, redirect, useParams } from "react-router-dom";

const NewsletterDetails = () => {
  const { id } = useParams();
  const [newsFromFirstEndpoint, setNewsFromFirstEndpoint] = useState({});
  const [newsFromSecondEndpoint, setNewsFromSecondEndpoint] = useState([]);

  const formatDate = (date) => {
    const currentDate = new Date();
    const creationDate = new Date(date);

    const timeDiff = Math.abs(currentDate.getTime() - creationDate.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let dateString = ``;
    if (diffDays === 1) {
      dateString += "1 day ago";
    } else {
      dateString += `${diffDays} days ago`;
    }

    return dateString;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [firstResponse, secondResponse] = await Promise.all([
          axios.get(`http://test-api.com/api/v1/news/${id}`),
          axios.get("http://test-api.com/api/v1/lastCreated"),
        ]);

        const firstEndpointNews = firstResponse.data;
        const secondEndpointNews = secondResponse.data;

        // Filter out news from the second endpoint that matches the first endpoint's news
        const filteredSecondEndpointNews = secondEndpointNews.filter(
          (item) => item.id !== firstEndpointNews.id
        );

        setNewsFromFirstEndpoint(firstEndpointNews);
        setNewsFromSecondEndpoint(filteredSecondEndpointNews);
      } catch (error) {
        // Handle errors here
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleLinkClick = async (id) => {
    try {
      const [firstResponse, secondResponse] = await Promise.all([
        axios.get(`http://test-api.com/api/v1/news/${id}`),
        axios.get("http://test-api.com/api/v1/lastCreated"),
      ]);
      setNewsFromFirstEndpoint(firstResponse.data);
      // Optionally, fetch additional data or perform actions based on the fetched news item.
      const firstEndpointNews = firstResponse.data;
      const secondEndpointNews = secondResponse.data;

      const filteredSecondEndpointNews = secondEndpointNews.filter(
        (item) => item.id !== firstEndpointNews.id
      );
      setNewsFromSecondEndpoint(filteredSecondEndpointNews);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <section>
      <div className="h-[400px] w-[100%] relative mb-[70px]">
        <img
          className="w-[100%] h-[100%]"
          src={newsFromFirstEndpoint.file}
          alt=""
        />
        <div className="w-[100%] h-[100%] bg-[#00000050] absolute top-[0] left-[0]"></div>
        <div className="absolute left-[48px] bottom-[56px]">
          <p className="text-[48px] font-[600] leading-[60px] text-[#FFFDFE] w-[730px]">
            {newsFromFirstEndpoint.title}
          </p>
          <div className="mt-[20px]">
            <span className="rounded-[8px] text-[14px] font-[500] leading-[17px] text-[#FFFDFE] inline-block py-[8px] px-[14px] bg-[#f7f3f818]">
              {newsFromFirstEndpoint.newsCategoryName}
            </span>
            <span className="text-[#FFFDFE] inline-block mx-[10px]">•</span>
            <span className="text-[16px] font-[500] leading-[20px] text-[#FFFDFE]">
              {newsFromFirstEndpoint.creationDate}
            </span>
          </div>
        </div>
      </div>
      <div className="my-[48px] mx-[60px] flex gap-[88px]">
        <div className="w-[928px] h-[1000px] bg-[red]">
          {newsFromFirstEndpoint.description}
        </div>
        {/* <div>
          <h2 className="text-[#020618] text-[25px] font-[600] leading-[33px] flex flex-col gap-[20px]">
            The Latest
          </h2>
          <div className="transition-all w-[300px] h-[155px] py-[20px] px-[18px] pr-[12px] text-[#020618] hover:bg-[#020618] hover:text-[#fff] group">
            <p className=" text-[14px] font-[600] leading-[20px] mb-[12px]">
              10 Habits That Will Change Your Live for the Better If envy and
              jealousy are impacting your friendships
            </p>
            <div className="flex">
              <span className=" text-[16px] font-[400] leading-[40px]">
                June 21,2022
              </span>
              <span className=" text-[16px] font-[400] leading-[40px] relative bottom-[7px] mx-[8px]">
                __
              </span>
              <span className=" flex  text-[16px] font-[400] leading-[40px]">
                <img
                  className="group-hover:brightness-[500]"
                  src={Clock}
                  alt=""
                />{" "}
                {} days ago
              </span>
            </div>
          </div>
        </div> */}
        <div>
          <h2 className="text-[#020618] text-[25px] font-[600] leading-[33px] flex flex-col gap-[20px]">
            The Latest
          </h2>
          {newsFromSecondEndpoint.map((item) => (
            <Link
              to={`/newsletter/details/${item.id}`}
              onClick={() => handleLinkClick(item.id)}
            >
              <div
                key={item.id}
                className="transition-all w-[300px]  py-[20px] px-[18px] pr-[12px] text-[#020618] hover:bg-[#020618] hover:text-[#fff] group"
              >
                <p className="text-[14px] font-[600] leading-[20px] mb-[12px]">
                  {item.title}
                </p>
                <div className="flex">
                  <span className="text-[16px] font-[400] leading-[40px]">
                    {item.creationDate}
                  </span>
                  <span className="text-[16px] font-[400] leading-[40px] relative bottom-[7px] mx-[8px]">
                    __
                  </span>
                  <span className="flex text-[16px] font-[400] leading-[40px]">
                    <img
                      className="group-hover:brightness-[500]"
                      src={Clock}
                      alt=""
                    />
                    {formatDate(item.creationDate)}
                    {/* Replace with your logic to calculate days */}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsletterDetails;
