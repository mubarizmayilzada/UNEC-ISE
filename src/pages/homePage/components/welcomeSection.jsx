import React from "react";
import WelcomeRedirectIconSrc from "../../../assets/img/welcomeredirect.svg";
import HomePageImgSectionSrc from "../../../assets/img/Homepageimg.png";

const WelcomeSection = () => {
  return (
    <>
      <section className="w-[auto] mt-[100px] mb-[64px] bg-[#fff] mx-[60px]">
        <p className="text-[#551d3b] text-[32px] font-[600] leading-[40px] text-left mb-[24px]">
          Welcome to ISE
        </p>
        <p className="text-[#1a0e15] text-[16px] font-lato font-[400] leading-[24px] mb-[12px]">
          Welcome to the International School of Economics, where we weave a
          rich tapestry of diverse perspectives, innovative ideas, and global
          experiences to empower the next generation of economic leaders. Our
          story is one of passion, collaboration, and commitment to transforming
          the world through economic understanding and insight.
          <br />
          <br />
          Established in 2014, our esteemed institution has grown to become a
          beacon of excellence in the field of economics. At the heart of our
          school's mission is a commitment to fostering a truly global
          perspective, empowering our students to navigate the complex and
          ever-changing economic landscape with confidence and finesse.
          <br />
          <br />
          Our accomplished faculty is composed of world-renowned scholars and
          industry experts, each dedicated to nurturing the intellectual
          curiosity and growth of our students. By integrating cutting-edge
          research, real-world experience, and a broad array of economic
          paradigms, we provide our students with an unparalleled educational
          experience that prepares them for success in a variety of careers and
          industries.
        </p>
        <div className="flex justify-end">
          <div className="flex w-[99px] whitespace-nowrap items-center justify-between gap-[12px] text-[#551d3b] text-[16px] font-lato font-[500] leading-[24px] justify-self-end">
            Get More
            <img alt="" className="w-[19px]" src={WelcomeRedirectIconSrc} />
          </div>
        </div>
      </section>
      <img
        alt=""
        className="w-[100%] h-[auto] mb-[64px]"
        src={HomePageImgSectionSrc}
      />
    </>
  );
};

export default WelcomeSection;
