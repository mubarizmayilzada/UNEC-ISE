import { Dropdown } from "antd";
import React from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

export default function DropdownItem({ items }) {
  return (
    <Dropdown menu={{ items }}>
      <div
        className="text-[14px] flex gap-[16px] text-[#7F7E7E] cursor-pointer items-center px-[24px]
         hover:text-[#983468] "
        onClick={(e) => e.preventDefault()}
      >
        {items[0].text=="research" && <p>Research</p> }
        {items[0].text=="about_us" && <p>About us</p> }
        {items[0].text=="news" && <p>News & Events</p> }
        {items[0].text=="academic_programs" && <p>Academic Programs</p> }
        {items[0].text=="contact" && <p>Contact</p> }
        
        <DownOutlined size={"small"} height={"4"} width={"4"} />
      </div>
    </Dropdown>
  );
}
