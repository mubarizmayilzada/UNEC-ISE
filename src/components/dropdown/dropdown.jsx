import { Dropdown } from "antd";
import React from "react";
import Arrow from "../../assets/img/arrow.svg";
// import { DownOutlined } from "@ant-design/icons";

export default function DropdownOi({ items }) {
  return (
    <Dropdown menu={{ items }}>
      <div
        className="text-[16px] flex gap-[16px] font-[600] text-[#1A0E15] cursor-pointer items-center px-[24px]
         hover:text-[#983468] "
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <img src={Arrow} alt="" className="mt-[3px]" />
        {items[0].text == "year" && <p>Academic Year</p>}
        {items[0].text == "speciality" && <p>Speciality</p>}
        {items[0].text == "category" && <p>Category</p>}
      </div>
    </Dropdown>
  );
}
