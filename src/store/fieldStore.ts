"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FieldType, TField, TFieldCollection } from "@/types/field";

type FieldStore = {
  fields: TFieldCollection;
  addFields: (fieldType: FieldType, rowNumber?: number) => void;
  removeRow: (rowIndex: number, colIndex: number) => void;
  updateField: (
    rowIndex: number,
    fieldIndex: number,
    updatedField: Partial<TField>,
  ) => void;
};

export const useFieldStore = create<FieldStore>()(
  persist(
    (set) => ({
      fields: [],
      addFields: (fieldType, rowNumber) => {
        set((state) => {
          const targetRowIndex = rowNumber ?? state.fields.length;
          const newField: TField = {
            Name: "",
            rowNumber: targetRowIndex,
            type: fieldType,
            description: "Defualt description",
            placeholder: "",
            className: "",
            isRequired: false,
            isDisabled: false,
          };
          const updatedFields =
            rowNumber !== undefined
              ? state.fields.map((row, i) => {
                  return i === rowNumber ? [...row, newField] : row;
                })
              : [...state.fields, [newField]];
          return { fields: updatedFields };
        });
      },
      removeRow: (rowIndex: number, colIndex: number) => {
        set((state) => {
          const updatedFields = state.fields.map((row, index) =>
            index === rowIndex
              ? row.filter((_, jIndex) => jIndex !== colIndex)
              : row,
          );
          if (updatedFields[rowIndex]?.length === 0) {
            return {
              fields: updatedFields.filter((_, i) => i !== rowIndex),
            };
          }
          return { fields: updatedFields };
        });
      },
      updateField: (
        rowIndex: number,
        fieldIndex: number,
        updatedField: Partial<TField>,
      ) => {
        set((state) => {
          const updatedFields = state.fields.map((row, index) => {
            if (index === rowIndex) {
              return row.map((field, index) => {
                if (index === fieldIndex) {
                  return { ...field, ...updatedField };
                }
                return field;
              });
            }
            return row;
          });
          return { fields: updatedFields };
        });
      },
    }),
    {
      name: "field-storage",
      partialize: (state) => ({ fields: state.fields }),
    },
  ),
);

export default useFieldStore;
