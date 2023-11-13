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
        <p>About us</p>
        <DownOutlined size={"small"} height={"5"} width={"5"} />
      </div>
    </Dropdown>
  );
}
