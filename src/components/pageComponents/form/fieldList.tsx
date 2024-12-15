"use client";
import FieldOptionArrangeSingleCard from "@/components/ui/field-option-arrange-single-card";
import useFieldStore from "@/store/fieldStore";
import { Trash2 } from "lucide-react";
import { FieldType, TField, TFieldRow } from "@/types/field";

type FieldRowProps = {
  rowIndex: number;
  fieldRow: TFieldRow;
  addField: (fieldType: FieldType) => void;
  removeField: (colIndex: number) => void;
  updateField: (colIndex: number, fieldData: Partial<TField>) => void;
};

const FieldRow = ({
  rowIndex,
  fieldRow,
  addField,
  removeField,
  updateField,
}: FieldRowProps) => {
  return (
    <div className="flex gap-4">
      {fieldRow.map((field, colIndex) => (
        <div
          key={`${field.type}-${colIndex}`}
          className="flex w-full items-center gap-2"
        >
          <div className="flex w-full flex-1 gap-1">
            <div className="w-full flex-1">
              <FieldOptionArrangeSingleCard
                field={field}
                updateField={(updatedField) => {
                  updateField(colIndex, updatedField);
                }}
              />
            </div>
            <button
              onClick={() => removeField(colIndex)}
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
  const { fields, addFields, removeRow, updateField } = useFieldStore();

  const handleAddField = (rowIndex: number) => (fieldType: FieldType) => {
    console.log(`Adding field of type ${fieldType} at row ${rowIndex}`);
    addFields(fieldType, rowIndex);
  };

  const removeField = (rowIndex: number) => (colIndex: number) => {
    console.log(`Removing field at row ${rowIndex} and col ${colIndex}`);
    removeRow(rowIndex, colIndex);
  };

  const handleUpdateField =
    (rowIndex: number) => (colIndex: number, field: Partial<TField>) => {
      console.log(`Updating field at row ${rowIndex}, col ${colIndex}:`, field);
      updateField(rowIndex, colIndex, field);
    };

  return (
    <div className="flex flex-col gap-4">
      {fields.map((fieldRow, rowIndex) => (
        <FieldRow
          key={`row-${rowIndex}`}
          rowIndex={rowIndex}
          fieldRow={fieldRow}
          addField={handleAddField(rowIndex)}
          removeField={removeField(rowIndex)}
          updateField={handleUpdateField(rowIndex)}
        />
      ))}
    </div>
  );
};

export default FieldOptionArranger;
