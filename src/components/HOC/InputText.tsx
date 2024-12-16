import { TField } from "@/types/field";
import InputBase from "../ui/inputbase";

const InputText = ({
  description,
  placeholder,
  name,
  isRequired,
  isDisabled,
}: TField) => {
  return (
    <InputBase>
      <div className="px-4 py-2">
        <label
          htmlFor={name.toLowerCase().replace(/\s+/g, "-")}
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          {name}
          {isRequired && <span className="ml-1 text-red-500">*</span>}
        </label>

        {/* Description */}
        {description && (
          <p className="mb-2 text-xs text-gray-500">{description}</p>
        )}

        {/* Input */}
        <input
          type="text"
          id={name.toLowerCase().replace(/\s+/g, "-")}
          name={name.toLowerCase().replace(/\s+/g, "-")}
          placeholder={placeholder || `Enter ${name}`}
          disabled={isDisabled}
          className={` w-full rounded-md border border-gray-300 bg-white text-sm text-gray-900
                    ${isDisabled ? "cursor-not-allowed bg-gray-100 text-gray-500" : "focus:border-blue-500 focus:ring-2 focus:ring-blue-200"} px-3 py-2 outline-none transition-all duration-200 `}
        />
      </div>
    </InputBase>
  );
};

export default InputText;
