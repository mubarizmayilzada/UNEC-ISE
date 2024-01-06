import React, { useEffect, useState } from "react";
import axios from "axios";
import Event from "../../../assets/img/event.png";
import { Link } from "react-router-dom";

const Newsletter = () => {
  const [newsSection1, setNewsSection1] = useState([]);
  const [newsSection2, setNewsSection2] = useState([]);
  const [newsSection3, setNewsSection3] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://test-api.com/api/v1/news");
        const newsItems = response.data.news.items;

        const first = (newsItems.length - 1) / 4;
        // Split the news items into three sections
        const section1 = newsItems.slice(0, 1); // Assuming two articles per section
        const section2 = newsItems.slice(1, first + 3);
        const section3 = newsItems.slice(first + 3, 4 * first);

        setNewsSection1(section1);
        setNewsSection2(section2);
        setNewsSection3(section3);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="mt-[50px] mx-[60px] mb-[75px]">
      <div className="flex gap-[32px]">
        <div className="flex flex-col">
          {/* <div className="h-[654px] w-[982px] rounded-[8px] relative mb-[70px]">
            <img
              className="w-[100%] h-[100%] rounded-[8px]"
              src={Event}
              alt=""
            />
            <div className="w-[100%] h-[100%] bg-[#00000050] rounded-[8px] absolute top-[0] left-[0]"></div>
            <div className="absolute left-[48px] bottom-[56px]">
              <div className="mb-[16px]">
                <span className="rounded-[8px] text-[14px] font-[500] leading-[17px] text-[#FFFDFE] inline-block py-[8px] px-[14px] bg-[#f7f3f818]">
                  Entertainment
                </span>
                <span className="text-[#FFFDFE] inline-block mx-[10px]">•</span>
                <span className="text-[16px] font-[500] leading-[20px] text-[#FFFDFE]">
                  2 aug
                </span>
              </div>
              <p className="text-[48px] font-[600] leading-[60px] text-[#FFFDFE] w-[730px]">
                “ISE Celebrates Graduation with an Unforgettable Party!”
              </p>
            </div>
          </div> */}
          <div className="h-[654px] w-[982px] rounded-[8px] relative mb-[70px]">
            {newsSection1.length > 0 && (
              <img
                className="w-[100%] h-[100%] rounded-[8px] object-cover"
                src={newsSection1[0].file} // Assuming the first article's file corresponds to the image
                alt=""
              />
            )}
            <div className="w-[100%] h-[100%] bg-[#00000050] rounded-[8px] absolute top-[0] left-[0]"></div>
            <div className="absolute left-[48px] bottom-[56px]">
              <div className="mb-[16px]">
                {newsSection1.length > 0 && (
                  <span className="rounded-[8px] text-[14px] font-[500] leading-[17px] text-[#FFFDFE] inline-block py-[8px] px-[14px] bg-[#f7f3f818]">
                    {newsSection1[0].newsCategoryName}{" "}
                    {/* Category from the first article */}
                  </span>
                )}
                <span className="text-[#FFFDFE] inline-block mx-[10px]">•</span>
                {newsSection1.length > 0 && (
                  <span className="text-[16px] font-[500] leading-[20px] text-[#FFFDFE]">
                    {newsSection1[0].creationDate}{" "}
                    {/* Creation date from the first article */}
                  </span>
                )}
              </div>
              {newsSection1.length > 0 && (
                <Link to={`/newsletter/details/${newsSection1[0].id}`}>
                  <p className="text-[48px] font-[600] leading-[60px] text-[#FFFDFE] w-[730px]">
                    {newsSection1[0].title} {/* Title from the first article */}
                  </p>
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-[30px]">
            {newsSection3.map((article, index) => (
              <div
                key={index}
                className="py-[32px] w-[475px] border-b-[1px] border-[#7F7E7E] border-dashed flex gap-[24px]"
              >
                <img
                  className="w-[124px] h-[124px] rounded-[8px] object-cover"
                  src={article.file} // Assuming each article's file corresponds to the image
                  alt=""
                />
                <div>
                  <div className="flex flex-col justify-between h-[100%]">
                    <div className="">
                      <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                        {article.newsCategoryName}{" "}
                        {/* Category from the current article */}
                      </span>
                      <span className="text-[#575457] inline-block mx-[10px]">
                        •
                      </span>
                      <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                        {article.creationDate}{" "}
                        {/* Creation date from the current article */}
                      </span>
                    </div>
                    <Link to={`/newsletter/details/${article.id}`}>
                      <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                        {article.title} {/* Title from the current article */}
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="py-[32px] w-[475px] border-b-[1px] border-[#7F7E7E] border-dashed flex gap-[24px]">
              <img
                className="w-[124px] h-[124px] rounded-[8px]"
                src={Event}
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="">
                    <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                      Entertainment
                    </span>
                    <span className="text-[#575457] inline-block mx-[10px]">
                      •
                    </span>
                    <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                      2 aug
                    </span>
                  </div>
                  <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                    Our Partners with Local Industry Leaders to Drive Economic
                    Growth
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[32px] w-[475px] border-b-[1px] border-[#7F7E7E] border-dashed flex gap-[24px]">
              <img
                className="w-[124px] h-[124px] rounded-[8px]"
                src={Event}
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="">
                    <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                      Entertainment
                    </span>
                    <span className="text-[#575457] inline-block mx-[10px]">
                      •
                    </span>
                    <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                      2 aug
                    </span>
                  </div>
                  <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                    Our Partners with Local Industry Leaders to Drive Economic
                    Growth
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[32px] w-[475px] border-b-[1px] border-[#7F7E7E] border-dashed flex gap-[24px]">
              <img
                className="w-[124px] h-[124px] rounded-[8px]"
                src={Event}
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="">
                    <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                      Entertainment
                    </span>
                    <span className="text-[#575457] inline-block mx-[10px]">
                      •
                    </span>
                    <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                      2 aug
                    </span>
                  </div>
                  <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                    Our Partners with Local Industry Leaders to Drive Economic
                    Growth
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[32px] w-[475px] border-b-[1px] border-[#7F7E7E] border-dashed flex gap-[24px]">
              <img
                className="w-[124px] h-[124px] rounded-[8px]"
                src={Event}
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="">
                    <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                      Entertainment
                    </span>
                    <span className="text-[#575457] inline-block mx-[10px]">
                      •
                    </span>
                    <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                      2 aug
                    </span>
                  </div>
                  <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                    Our Partners with Local Industry Leaders to Drive Economic
                    Growth
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[32px] w-[475px] border-b-[1px] border-[#7F7E7E] border-dashed flex gap-[24px]">
              <img
                className="w-[124px] h-[124px] rounded-[8px]"
                src={Event}
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="">
                    <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                      Entertainment
                    </span>
                    <span className="text-[#575457] inline-block mx-[10px]">
                      •
                    </span>
                    <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                      2 aug
                    </span>
                  </div>
                  <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                    Our Partners with Local Industry Leaders to Drive Economic
                    Growth
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[32px] w-[475px] border-b-[1px] border-[#7F7E7E] border-dashed flex gap-[24px]">
              <img
                className="w-[124px] h-[124px] rounded-[8px]"
                src={Event}
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="">
                    <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                      Entertainment
                    </span>
                    <span className="text-[#575457] inline-block mx-[10px]">
                      •
                    </span>
                    <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                      2 aug
                    </span>
                  </div>
                  <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                    Our Partners with Local Industry Leaders to Drive Economic
                    Growth
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[32px] w-[475px] border-b-[1px] border-[#7F7E7E] border-dashed flex gap-[24px]">
              <img
                className="w-[124px] h-[124px] rounded-[8px]"
                src={Event}
                alt=""
              />
              <div>
                <div className="flex flex-col justify-between h-[100%]">
                  <div className="">
                    <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                      Entertainment
                    </span>
                    <span className="text-[#575457] inline-block mx-[10px]">
                      •
                    </span>
                    <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                      2 aug
                    </span>
                  </div>
                  <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                    Our Partners with Local Industry Leaders to Drive Economic
                    Growth
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-[56px] px-[20px]">
          {newsSection2.map((article) => (
            <div key={article.id} className="w-[282px] ">
              <img
                className="w-[100%] h-[126px] rounded-[8px] mb-[28px] object-cover"
                src={article.file}
                alt=""
              />
              <div className="">
                <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                  {article.newsCategoryName}
                </span>
                <span className="text-[#575457] inline-block mx-[10px]">•</span>
                <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                  {article.creationDate}
                </span>
              </div>
              <Link to={`/newsletter/details/${article.id}`}>
                <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
                  {article.title}
                </p>
              </Link>
            </div>
          ))}
          {/* <div className="w-[282px] ">
            <img
              className="w-[100%] h-[126px] rounded-[8px] mb-[28px]"
              src={Event}
              alt=""
            />
            <div className="">
              <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                Entertainment
              </span>
              <span className="text-[#575457] inline-block mx-[10px]">•</span>
              <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                2 aug
              </span>
            </div>
            <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
              Our Partners with Local Industry Leaders to Drive Economic Growth
            </p>
          </div>
          <div className="w-[282px] ">
            <img
              className="w-[100%] h-[126px] rounded-[8px] mb-[28px]"
              src={Event}
              alt=""
            />
            <div className="">
              <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                Entertainment
              </span>
              <span className="text-[#575457] inline-block mx-[10px]">•</span>
              <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                2 aug
              </span>
            </div>
            <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
              Our Partners with Local Industry Leaders to Drive Economic Growth
            </p>
          </div>
          <div className="w-[282px] ">
            <img
              className="w-[100%] h-[126px] rounded-[8px] mb-[28px]"
              src={Event}
              alt=""
            />
            <div className="">
              <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                Entertainment
              </span>
              <span className="text-[#575457] inline-block mx-[10px]">•</span>
              <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                2 aug
              </span>
            </div>
            <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
              Our Partners with Local Industry Leaders to Drive Economic Growth
            </p>
          </div>
          <div className="w-[282px] ">
            <img
              className="w-[100%] h-[126px] rounded-[8px] mb-[28px]"
              src={Event}
              alt=""
            />
            <div className="">
              <span className="text-[16px] font-[500] leading-[20px] text-[#551D3B] inline-block">
                Entertainment
              </span>
              <span className="text-[#575457] inline-block mx-[10px]">•</span>
              <span className="text-[16px] font-[500] leading-[20px] text-[#575457]">
                2 aug
              </span>
            </div>
            <p className="text-[24px] font-[600] leading-[30px] text-[#1A0E15]">
              Our Partners with Local Industry Leaders to Drive Economic Growth
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
