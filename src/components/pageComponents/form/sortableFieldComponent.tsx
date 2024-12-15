"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Trash2, Grip } from "lucide-react";

import FieldOptionArrangeSingleCard from "@/components/HOC/fieldListSingleCard";
import { FieldType, TField } from "@/types/field";

interface SortableFieldItemProps {
  field: TField;
  colIndex: number;
  rowIndex: number;
  removeField: (colIndex: number) => void;
  updateField: (colIndex: number, fieldData: Partial<TField>) => void;
  addField: (fieldType: FieldType) => void;
}

const SortableFieldItem: React.FC<SortableFieldItemProps> = ({
  field,
  colIndex,
  rowIndex,
  removeField,
  updateField,
  addField,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: `${rowIndex}-${colIndex}`,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex w-full items-center gap-2"
    >
      <div className="flex w-full flex-1 gap-1">
        <div
          {...attributes}
          {...listeners}
          className="mr-2 flex cursor-move items-center"
        >
          <Grip className="text-gray-400" />
        </div>
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
    </div>
  );
};

export default SortableFieldItem;
