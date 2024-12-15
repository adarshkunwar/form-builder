"use client";
import FieldOptionArrangeSingleCard from "@/components/ui/field-option-arrange-single-card";
import useFieldStore from "@/store/fieldStore";
import { Trash2 } from "lucide-react";
import { FieldType, TFieldRow } from "@/types/field";

type FieldRowProps = {
  fieldRow: TFieldRow;
  addField: (fieldType: FieldType) => void;
  removeField: (colIndex: number) => void;
};

const FieldRow = ({ fieldRow, addField, removeField }: FieldRowProps) => {
  return (
    <div className="flex gap-4">
      {fieldRow.map((field, index) => (
        <div key={`${field.type}-${index}`} className="flex items-center gap-2">
          <div className="flex gap-1">
            <FieldOptionArrangeSingleCard title={field.type} />
            <button
              onClick={() => removeField(index)}
              className="flex size-8 items-center justify-center border bg-red-500 p-2 text-white"
            >
              <Trash2 />
            </button>
          </div>
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
  const { fields, addFields, removeRow } = useFieldStore();

  const handleAddField = (index: number) => (fieldType: FieldType) => {
    console.log(`Adding field of type ${fieldType} at row ${index}`);
    addFields(fieldType, index);
  };

  const removeField = (rowIndex: number) => (colIndex: number) => {
    console.log(`Removing field at row ${rowIndex} and col ${colIndex}`);
    removeRow(rowIndex, colIndex);
  };

  return (
    <div className="flex flex-col gap-4">
      {fields.map((fieldRow, rowIndex) => (
        <FieldRow
          key={`row-${rowIndex}`}
          fieldRow={fieldRow}
          addField={handleAddField(rowIndex)}
          removeField={removeField(rowIndex)}
        />
      ))}
    </div>
  );
};

export default FieldOptionArranger;
