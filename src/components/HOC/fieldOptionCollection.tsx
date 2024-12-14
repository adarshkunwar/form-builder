"use client";
import FieldOption from "@/components/ui/fieldOption";
import { fieldsArray } from "@/data/field";
import useFieldStore from "@/store/fieldStore";

const FieldOptionCollection = () => {
  const { addFields } = useFieldStore();

  return (
    <div>
      {fieldsArray.map((field, index) => {
        return (
          <div key={index}>
            <FieldOption
              name={field}
              onclick={() => addFields(field)}
              key={index}
            />
          </div>
        );
      })}
    </div>
  );
};
export default FieldOptionCollection;
