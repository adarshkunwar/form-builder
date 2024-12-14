import React from "react";
import { TField } from "@/types/field";
import InputField from "./InputField";
import CheckboxField from "./CheckBoxField";
import DatePickerField from "./DatePicker";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={` relative w-full rounded-lg border border-gray-300 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 `}
    >
      {children}
    </div>
  );
};
const Field = ({ ...field }: TField) => {
  switch (field.type) {
    case "input":
      return <InputField field={field} />;
    case "checkbox":
      return (
        <Wrapper>
          <CheckboxField field={field} />;
        </Wrapper>
      );
    case "date-picker":
      return (
        <Wrapper>
          <DatePickerField field={field} />;
        </Wrapper>
      );
    default:
      return <div> Invalid format </div>;
  }
};

export default Field;
