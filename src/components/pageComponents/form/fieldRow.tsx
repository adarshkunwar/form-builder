"use client";
import React from "react";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

import SortableFieldItem from "./sortableFieldComponent";
import { FieldType, TField, TFieldRow } from "@/types/field";

interface FieldRowProps {
  fieldRow: TFieldRow;
  rowIndex: number;
  addField: (fieldType: FieldType) => void;
  removeField: (colIndex: number) => void;
  updateField: (colIndex: number, fieldData: Partial<TField>) => void;
}

const FieldRow: React.FC<FieldRowProps> = ({
  fieldRow,
  rowIndex,
  addField,
  removeField,
  updateField,
}) => {
  // Create unique IDs for each field in this row
  const fieldIds = fieldRow.map((_, colIndex) => `${rowIndex}-${colIndex}`);

  return (
    <SortableContext items={fieldIds} strategy={rectSortingStrategy}>
      <div className="flex gap-4">
        {fieldRow.map((field, colIndex) => (
          <SortableFieldItem
            key={`${rowIndex}-${colIndex}`}
            field={field}
            colIndex={colIndex}
            rowIndex={rowIndex}
            removeField={removeField}
            updateField={updateField}
            addField={addField}
          />
        ))}
      </div>
    </SortableContext>
  );
};

export default FieldRow;
