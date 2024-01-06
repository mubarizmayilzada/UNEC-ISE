import React, { useEffect, useState } from "react";
import RedirectIconSrc from "../../../assets/img/redirectwhite.svg";
import axios from "axios";
import { Link } from "react-router-dom";

const NewsEvents = () => {
  const [bigNews, setBigNews] = useState([]);
  const [mainBigNews, setMainBigNews] = useState([]); // [0
  const [news, setNews] = useState([]);
  const [firstNews, setFirstNews] = useState([]); // [0
  const [secondNews, setSecondNews] = useState([]); // [0

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://test-api.com/api/v1/lastCreated"
        );
        setBigNews(response.data[0]);
        setNews(response.data.slice(1, 3));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://test-api.com/api/v1/news/${bigNews.id}`
        );
        setMainBigNews(response.data);
        const response2 = await axios.get(
          `http://test-api.com/api/v1/news/${news[0].id}`
        );
        setFirstNews(response2.data);
        const response3 = await axios.get(
          `http://test-api.com/api/v1/news/${news[1].id}`
        );
        setSecondNews(response3.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="mx-[60px] mb-[120px]">
      <p className="text-[#551d3b] text-[32px] font-[600] leading-[40px] text-left mb-[24px]">
        News and Events
      </p>
      <div className="h-[500px] flex justify-between">
        <div className="relative rounded-[5px] pt-[36px] pr-[130px] pb-[46px] pl-[36px] w-[800px]">
          <div className="bg-[#0000007c] absolute top-0 left-0 w-[100%] h-[100%] z-[1] rounded-[8px]"></div>
          <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-1] rounded-[8px]">
            <img
              src={firstNews.file}
              alt=""
              className="w-[100%] h-[100%] object-cover rounded-[8px]"
            />
          </div>
          <div className="relative z-[2]">
            <div className="">
              <span className="inline-block mb-[170px] py-[8px] px-[16px] bg-[#FCFBFC33] rounded-[4px] text-[#FFFDFE] text-[14px] font-lato font-[700] leading-[17px]">
                {mainBigNews.creationDate}
              </span>
            </div>
            <p className="text-[#FFFDFE] text-[36px] font-lato font-[700] leading-[45px] mb-[20px]">
              {mainBigNews.title}
            </p>
            <p className="text-[#FFFDFE] text-[16px] font-lato font-[400] leading-[24px] mb-[8px]">
              <div
                dangerouslySetInnerHTML={{
                  __html: mainBigNews.description?.slice(0, 200),
                }}
              ></div>
            </p>
            <div className="flex justify-start">
              <Link
                to={`/newsletter/details/${mainBigNews.id}`}
                className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#FFFDFE] text-[16px] font-lato font-[500] leading-[24px] justify-self-end"
              >
                View in details
                <img alt="" className="w-[19px]" src={RedirectIconSrc} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-[30px]">
          <div className="relative rounded-[8px] pt-[23px] pr-[95px] pb-[23px] pl-[36px] w-[580px] h-[50%]">
            <div className="bg-[#0000007c] absolute top-0 left-0 w-[100%] h-[100%] z-[1] rounded-[8px]"></div>
            <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-1] rounded-[8px]">
              <img
                src={firstNews.file}
                alt=""
                className="w-[100%] h-[100%] object-cover rounded-[8px]"
              />
            </div>
            <div className="relative z-[2]">
              <div className="">
                <span className="inline-block mb-[32px] py-[5px] px-[10px] bg-[#FCFBFC33] rounded-[3px] text-[#FFFDFE] text-[9px] font-lato font-[700] leading-[11px]">
                  {firstNews.creationDate}
                </span>
              </div>
              <p className="text-[#FFFDFE] text-[23px] font-lato font-[700] leading-[29px] mb-[13px]">
                {firstNews.title}
              </p>
              <p className="text-[#FFFDFE] text-[10px] font-lato font-[400] leading-[15px] mb-[5px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: firstNews.description?.slice(0, 200),
                  }}
                ></div>
              </p>
              <div className="flex justify-start">
                <Link
                  to={`/newsletter/details/${firstNews.id}`}
                  className="flex w-[88px] whitespace-nowrap items-center justify-between gap-[12px] text-[#FFFDFE] text-[10px] font-lato font-[500] leading-[15px] justify-self-end"
                >
                  View in details
                  <img alt="" className="w-[12px]" src={RedirectIconSrc} />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative rounded-[8px] pt-[23px] pr-[95px] pb-[23px] pl-[36px] w-[580px] h-[50%]">
            <div className="bg-[#0000007c] absolute top-0 left-0 w-[100%] h-[100%] z-[1] rounded-[8px]"></div>
            <div className="absolute top-0 left-0 w-[100%] h-[100%] z-[-1] rounded-[8px]">
              <img
                src={secondNews.file}
                alt=""
                className="w-[100%] h-[100%] object-cover rounded-[8px]"
              />
            </div>
            <div className="relative z-[2]">
              <div className="">
                <span className="inline-block mb-[32px] py-[5px] px-[10px] bg-[#FCFBFC33] rounded-[3px] text-[#FFFDFE] text-[9px] font-lato font-[700] leading-[11px]">
                  {secondNews.creationDate}
                </span>
              </div>
              <p className="text-[#FFFDFE] text-[23px] font-lato font-[700] leading-[29px] mb-[13px]">
                {secondNews.title}
              </p>
              <p className="text-[#FFFDFE] text-[10px] font-lato font-[400] leading-[15px] mb-[5px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: secondNews.description?.slice(0, 200),
                  }}
                ></div>
              </p>
              <div className="flex justify-start">
                <Link
                  to={`/newsletter/details/${secondNews.id}`}
                  className="flex w-[88px] whitespace-nowrap items-center justify-between gap-[12px] text-[#FFFDFE] text-[10px] font-lato font-[500] leading-[15px] justify-self-end"
                >
                  View in details
                  <img alt="" className="w-[12px]" src={RedirectIconSrc} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
