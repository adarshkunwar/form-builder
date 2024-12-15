"use client";
import React from "react";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Trash2, Grip } from "lucide-react";
import FieldOptionArrangeSingleCard from "@/components/HOC/fieldListSingleCard";
import useFieldStore from "@/store/fieldStore";
import { FieldType, TField, TFieldRow } from "@/types/field";

// Sortable Field Item Component
const SortableFieldItem = ({
  field,
  colIndex,
  rowIndex,
  removeField,
  updateField,
  addField,
}: {
  field: TField;
  colIndex: number;
  rowIndex: number;
  removeField: (colIndex: number) => void;
  updateField: (colIndex: number, fieldData: Partial<TField>) => void;
  addField: (fieldType: FieldType) => void;
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

// Field Row Component
const FieldRow = ({
  fieldRow,
  rowIndex,
  addField,
  removeField,
  updateField,
}: {
  fieldRow: TFieldRow;
  rowIndex: number;
  addField: (fieldType: FieldType) => void;
  removeField: (colIndex: number) => void;
  updateField: (colIndex: number, fieldData: Partial<TField>) => void;
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

// Main Field Option Arranger Component
const FieldOptionArranger = () => {
  const { fields, addFields, removeRow, updateField, reorderFields } =
    useFieldStore();

  // Setup sensors for pointer and keyboard interactions
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // Handle drag end event
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    // Extract row and column indices
    const [activeRowIndex, activeColIndex] = (active.id as string)
      .split("-")
      .map(Number);
    const [overRowIndex, overColIndex] = (over.id as string)
      .split("-")
      .map(Number);

    // Reorder fields
    reorderFields(activeRowIndex, activeColIndex, overRowIndex, overColIndex);
  };

  // Handlers for adding, removing, and updating fields
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
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-4">
        {fields.map((fieldRow, rowIndex) => (
          <FieldRow
            key={`row-${rowIndex}`}
            fieldRow={fieldRow}
            rowIndex={rowIndex}
            addField={handleAddField(rowIndex)}
            removeField={removeField(rowIndex)}
            updateField={handleUpdateField(rowIndex)}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default FieldOptionArranger;
