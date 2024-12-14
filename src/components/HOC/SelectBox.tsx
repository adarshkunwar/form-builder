import React from "react";
import { TField } from "@/types/field";

const SelectBox = ({
  field,
  options,
}: {
  field: TField;
  options: string[];
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`Select (${field.Name}): `, event.target.value);
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
      <select
        id={field.Name}
        name={field.Name}
        className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
          field.isDisabled ? "cursor-not-allowed bg-gray-200" : "bg-white"
        }`}
        disabled={field.isDisabled}
        required={field.isRequired}
        onChange={handleSelectChange}
      >
        <option value="" disabled>
          {field.placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
