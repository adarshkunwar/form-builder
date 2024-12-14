"use client";
import FieldOptionArrangeSingleCard from "@/components/ui/field-option-arrange-single-card";
import useFieldStore from "@/store/fieldStore";
import { TFieldRow } from "@/types/field";

const FieldRow = ({ fieldRow }: { fieldRow: TFieldRow }) => {
  return (
    <div className="flex flex-col gap-2">
      {fieldRow.map((field, i) => (
        <FieldOptionArrangeSingleCard key={i} title={field.type} />
      ))}
    </div>
  );
};

const FieldOptionArranger = () => {
  const { fields } = useFieldStore();

  return (
    <div className="flex flex-col gap-2">
      {fields.map((fieldRow, i) => (
        <FieldRow key={i} fieldRow={fieldRow} />
      ))}
    </div>
  );
};

export default FieldOptionArranger;
