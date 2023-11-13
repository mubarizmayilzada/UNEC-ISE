import React, { useState } from "react";
import styled from "styled-components";
import LogoSrc from "../../assets/img/dropdown.svg";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  padding: 20px 24px;
  background-color: #fff;
  color: #7f7e7e;
  font-size: 14px;
  cursor: pointer;
  position: relative;
`;
const DropdownUl = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding-top: 5px;
  background-color: #fff;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const DropdownLi = styled(Link)`
  width: 100%;
  padding: 4px 10px;
  color: #7f7e7e;
  line-height: 21px;
`;

const DropdownLogo = styled.img`
  margin-top: 3px;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  line-height: 17px;
`;
const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <InnerWrapper onClick={() => handleClick()}>
        {props.content} <DropdownLogo src={LogoSrc} />
      </InnerWrapper>
      {open && (
        <DropdownUl>
          {props.data.map((item) => (
            <Link key={item.id} to={item.url}>
              {item.name}
            </Link>
          ))}
          <Link to={props.url}>{props.name}</Link>
        </DropdownUl>
      )}
    </Wrapper>
  );
};

export default Dropdown;
