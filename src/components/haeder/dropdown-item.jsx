import { Dropdown } from "antd";
import Arrow from '../../assets/img/arrownav.svg'
import React from "react";

export default function DropdownItem({ items }) {
  return (
    <Dropdown menu={{ items }}>
      <div
        className="text-[14px] flex gap-[16px] text-[#7F7E7E] cursor-pointer items-center px-[24px]
         hover:text-[#983468] "
        onClick={(e) => e.preventDefault()}
      >
        {items[0].text=="research" && <p>Research</p> }
        {items[0].text=="student" && <p>Students</p> }
        {items[0].text=="about_us" && <p>About us</p> }
        {items[0].text=="news" && <p>News & Events</p> }
        {items[0].text=="academic_programs" && <p>Academic Programs</p> }
        {items[0].text=="contact" && <p>Contact</p> }
        
        <img src={Arrow} alt="" className="mt-[3px] fill-[#7F7E7E]" />
      </div>
    </Dropdown>
  );
}
