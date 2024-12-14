import React from "react";
import { TField } from "@/types/field";

const DatePickerField = ({ field }: { field: TField }) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Date Picker (${field.Name}): `, event.target.value);
  };

  return (
    <div className="mb-4">
      <label
        htmlFor={field.Name}
        className="block text-sm font-medium text-gray-700"
      >
        {field.description}{" "}
        {field.isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        id={field.Name}
        name={field.Name}
        type="date"
        placeholder={field.placeholder}
        className={`mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
          field.isDisabled ? "cursor-not-allowed bg-gray-200" : "bg-white"
        }`}
        disabled={field.isDisabled}
        required={field.isRequired}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default DatePickerField;