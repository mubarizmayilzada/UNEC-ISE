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
    label: <Link to="/about-us">About Us</Link>,
    text: "about_us"
  },
  {
    key: "2",
    label: <Link to="/adminstrative-staff">Adminstrative Staff</Link>,
    text: "about_us"
  },
  {
    key: "3",
    label: <Link to="/academic-staff">Academic Staff</Link>,
    text: "about_us"
  },

];
const student = [
  {
    key: "1",
    label: <Link to="/student-clubs">Student Clubs</Link>,
    text: "student"
  },
  {
    key: "2",
    label: <Link to="/student-alumni">Student Alumni</Link>,
    text: "student"
  },
];
const research = [
  {
    key: "1",
    label: <Link to="/publications">Publications</Link>,
    text: "research"
  },
];

const news = [
  {
    key: "1",
    label: <Link to="/newsletter">Newsletter</Link>,
    text: "news"
  },
  {
    key: "2",
    label: <Link to="/events">Events</Link>,
    text: "news"
  },
];

const academicPrograms = [
  {
    key: "1",
    label: <Link to="/academic-programs">Academic programs</Link>,
    text: "academic_programs"
  }
];

const contact = [
  {
    key: "1",
    label: <Link to="/contact">Contact</Link>,
    text: "contact"
  }
];

const Navbar = () => {
  return (
    <div className="flex items-center gap-[24px] px-[72px]">
      <DropdownItem items={aboutUs} />
      <DropdownItem items={student} />
      <DropdownItem items={research} />
      <DropdownItem items={news} />
      <DropdownItem items={academicPrograms} />
      <DropdownItem items={contact} />
    </div>
  );
};

export default Navbar;
