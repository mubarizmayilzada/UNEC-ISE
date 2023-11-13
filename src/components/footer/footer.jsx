import React from "react";
import FooterLogo from "../../assets/img/footerLogo.svg";

const Footer = () => {
  return (
    <section className="px-[60px] py-[36px] bg-[#1A0E15] flex justify-between">
      <ul className="flex flex-col gap-[44px]">
        <li>
          <img src={FooterLogo} alt="" />
        </li>
        <li className="text-[8px] font-lato font-[500] leading-[10px] w-[120px] text-[#fff]">
          International School of Economics (ISE) ©2023, all rights reserved
        </li>
      </ul>
      <ul className="text-[14px] font-lato font-[500] leading-[17px] text-[#fff] flex flex-col gap-[12px]">
        <h3 className="text-[20px] font-lato font-[600] leading-[25px] text-[#fff] mb-[3px]">
          About Us
        </h3>
        <li>Who we are</li>
        <li>History</li>
        <li>Administrative Structure</li>
        <li>Faculty Lecturers</li>
        <li>Accreditation</li>
      </ul>
      <ul className="text-[14px] font-lato font-[500] leading-[17px] text-[#fff] flex flex-col gap-[15px]">
        <h3 className="text-[20px] font-lato font-[600] leading-[25px] text-[#fff] mb-[3px]">
          Research
        </h3>
        <li>Publications</li>
      </ul>
      <ul className="text-[14px] font-lato font-[500] leading-[17px] text-[#fff] flex flex-col gap-[15px]">
        <h3 className="text-[20px] font-lato font-[600] leading-[25px] text-[#fff] mb-[3px]">
          Academic Programs
        </h3>
        <li>Undergraduate Programs</li>
      </ul>
      <ul className="text-[14px] font-lato font-[500] leading-[17px] text-[#fff] flex flex-col gap-[15px]">
        <h3 className="text-[20px] font-lato font-[600] leading-[25px] text-[#fff] mb-[3px]">
          Students
        </h3>
        <li>Students Club</li>
        <li>Success Stories</li>
        <li>
          Networking <br /> Opportunities
        </li>
      </ul>
      <ul className="text-[14px] font-lato font-[500] leading-[17px] text-[#fff] flex flex-col gap-[15px]">
        <h3 className="text-[20px] font-lato font-[600] leading-[25px] text-[#fff] mb-[3px]">
          News and Events
        </h3>
        <li>News</li>
        <li>Events</li>
      </ul>
      <ul className="text-[14px] font-lato font-[500] leading-[17px] text-[#fff] flex flex-col gap-[15px]">
        <h3 className="text-[20px] font-lato font-[600] leading-[25px] text-[#fff] mb-[3px]">
          Contact
        </h3>
        <li>Emailme@ise.edu.az</li>
        <li>+994 (51) 778 60 29</li>
        <li>
          Istiglaliyyat street 6,
          <br />
          Baku city, Azerbaijan
        </li>
      </ul>
    </section>
  );
};

export default Footer;
