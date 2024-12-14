"use client";
import FieldOption from "@/components/ui/fieldOption";

const fields = [
  "checkbox",
  "date-picker",
  "file-input",
  "input",
  "input-otp",
  "multi-select",
  "password",
  "phone",
  "select",
  "slider",
  "switch",
];

const FieldOptionCollection = () => {
  return (
    <div>
      {fields.map((field, index) => {
        return (
          <div key={index}>
            <FieldOption
              name={field}
              onclick={() => console.log("clicked")}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};
export default FieldOptionCollection;
