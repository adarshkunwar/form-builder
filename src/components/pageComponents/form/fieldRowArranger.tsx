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
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import FieldRow from "./fieldRow";
import useFieldStore from "@/store/fieldStore";
import { FieldType, TField } from "@/types/field";

const FieldOptionArranger: React.FC = () => {
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
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Rearrange Fields</h1>
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
    </div>
  );
};

export default FieldOptionArranger;
