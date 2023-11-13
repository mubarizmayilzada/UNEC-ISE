import React from "react";
// import Dropdown from "../dropdown/dropdown";
import DropdownItem from "./dropdown-item";
import { Link } from "react-router-dom";

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 12px;
// `;

const aboutUs = [
  {
    key: "1",
    label: <Link to="/adminstrative-staff">Adminstrative Staff</Link>,
  },
  {
    key: "2",
    label: <Link to="/academic-staff">Academic Staff</Link>,
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center gap-[24px] px-[72px]">
      <DropdownItem items={aboutUs} />
      <DropdownItem items={aboutUs} />
      <DropdownItem items={aboutUs} />
      <DropdownItem items={aboutUs} />
      <DropdownItem items={aboutUs} />
    </div>
  );
};

export default Navbar;
