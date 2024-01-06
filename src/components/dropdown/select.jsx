import { Select } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function SelectOi({ options, setValue, label, ...props }) {
  return (
    <Select
      onChange={(e) => {
        console.log(e);
        setValue(e);
      }}
      options={[{ label: label, value: "" }, ...options]}
      {...props}
    />
  );
}
