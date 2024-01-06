import React from "react";
import RedirectIconSrc from "../../../assets/img/welcomeredirect.svg";
import { Link } from "react-router-dom";
import Left from "../../../assets/img/sakams.PNG";
import Right from "../../../assets/img/sakamss.PNG";

const StudentHomepage = () => {
  return (
    <section className="mx-[60px] mb-[100px]">
      <div className="flex justify-between w-[100%]">
        <div className="w-[50%] py-[24px] px-[32px]">
          <p className="text-[#551d3b] text-[32px] font-[600] leading-[40px] text-left mb-[24px]">
            Student Activities
          </p>
          <p className="mb-[12px]">
            Hey there, did you know that our university has an impressive track
            record when it comes to research and publications? Our professors
            and students are always on the cutting edge of their fields,
            constantly pushing the boundaries of knowledge and discovering new
            information that can help improve our world.
            <br />
            <br />
            From groundbreaking studies on climate change to cutting-edge
            innovations in technology and medicine, our university is home to
            some of the most exciting research and publications in the world.
            And the best part is, this research isn't just beneficial to the
            academic community - it has real-world applications that can make a
            difference in people's lives.
          </p>
          <div className="flex justify-start">
            <Link
              to={"/student-club"}
              className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end"
            >
              Get More
              <img alt="" className="w-[19px]" src={RedirectIconSrc} />
            </Link>
          </div>
        </div>
        <div className="w-[50%] bg-blue">
          <img src={Right} alt="" className="w-[100%] h-[100%] bg-[red]" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[50%] ">
          <img src={Left} alt="" className="w-[100%] h-[100%] " />
        </div>
        <div className="w-[50%] py-[24px] px-[32px]">
          <p className="text-[#551d3b] text-[32px] font-[600] leading-[40px] text-left mb-[24px]">
            Researches and Publications
          </p>
          <p className="mb-[12px]">
            Hey there, did you know that our university has an impressive track
            record when it comes to research and publications? Our professors
            and students are always on the cutting edge of their fields,
            constantly pushing the boundaries of knowledge and discovering new
            information that can help improve our world.
            <br />
            <br />
            From groundbreaking studies on climate change to cutting-edge
            innovations in technology and medicine, our university is home to
            some of the most exciting research and publications in the world.
            And the best part is, this research isn't just beneficial to the
            academic community - it has real-world applications that can make a
            difference in people's lives.
          </p>
          <div className="flex justify-start">
            <Link
              to={"/publications"}
              className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end"
            >
              Get More
              <img alt="" className="w-[19px]" src={RedirectIconSrc} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentHomepage;
