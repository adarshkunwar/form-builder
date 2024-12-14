import React from "react";
import { TField } from "@/types/field";

const CheckboxField = ({ field }: { field: TField }) => {
  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Checkbox (${field.Name}): `, event.target.checked);
  };

  return (
    <div className="mb-4 flex items-center space-x-2">
      <input
        id={field.Name}
        name={field.Name}
        type="checkbox"
        className={`size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${
          field.isDisabled ? "cursor-not-allowed" : ""
        }`}
        disabled={field.isDisabled}
        onChange={handleToggle}
      />
      <label htmlFor={field.Name} className="text-sm font-medium text-gray-700">
        {field.description}
      </label>
    </div>
  );
};

export default CheckboxField;
