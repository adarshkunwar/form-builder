"use client";
import FieldOption from "@/components/ui/fieldOption";
import { fieldsArray } from "@/data/field";
import useFieldStore from "@/store/fieldStore";

const FieldOptionCollection = () => {
  const { addFields } = useFieldStore();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl font-semibold">Fields</h1>
      <div className="flex gap-2 md:flex-col">
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
    </div>
  );
};
export default FieldOptionCollection;
