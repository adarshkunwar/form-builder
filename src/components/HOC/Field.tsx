import React from "react";
import { TField } from "@/types/field";
import InputField from "./InputField";
import CheckboxField from "./CheckBoxField";
import DatePickerField from "./DatePicker";

const Field = ({ ...field }: TField) => {
  switch (field.type) {
    case "input":
      return <InputField field={field} />;
    case "password":
      return <InputField field={field} />;
    case "checkbox":
      return <CheckboxField field={field} />;
    case "date-picker":
      return <DatePickerField field={field} />;
    default:
      return <div> Invalid format </div>;
  }
};

export default Field;
