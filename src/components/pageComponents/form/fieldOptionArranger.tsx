"use client";
import FieldOptionArrangeSingleCard from "@/components/ui/field-option-arrange-single-card";
import useFieldStore from "@/store/fieldStore";
import { FieldType, TFieldRow } from "@/types/field";

type FieldRowProps = {
  fieldRow: TFieldRow;
  addField: (fieldType: FieldType) => void;
};

const FieldRow = ({ fieldRow, addField }: FieldRowProps) => {
  return (
    <div className="flex gap-4">
      {fieldRow.map((field, index) => (
        <div key={`${field.type}-${index}`} className="flex items-center gap-2">
          <FieldOptionArrangeSingleCard title={field.type} />
          <button
            onClick={() => addField(field.type)}
            className="flex size-8 items-center justify-center rounded-full border bg-white p-2"
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
};

const FieldOptionArranger = () => {
  const { fields, addFields } = useFieldStore();

  const handleAddField = (index: number) => (fieldType: FieldType) => {
    console.log(`Adding field of type ${fieldType} at row ${index}`);
    addFields(fieldType, index);
  };

  return (
    <div className="flex flex-col gap-4">
      {fields.map((fieldRow, rowIndex) => (
        <FieldRow
          key={`row-${rowIndex}`}
          fieldRow={fieldRow}
          addField={handleAddField(rowIndex)}
        />
      ))}
    </div>
  );
};

export default FieldOptionArranger;
