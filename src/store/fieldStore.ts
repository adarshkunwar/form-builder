"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { FieldType, TField, TFieldCollection } from "@/types/field";

type FieldStore = {
  fields: TFieldCollection;
  addFields: (fieldType: FieldType) => void;
  removeRow: (rowIndex: number) => void;
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
      addFields: (fieldType) => {
        set((state) => {
          const targetRowIndex = state.fields.length + 1;
          const newField: TField = {
            Name: "",
            rowNumber: targetRowIndex,
            type: fieldType,
            description: "",
            placeholder: "",
            className: "",
            isRequired: false,
            isDisabled: false,
          };
          const updatedFields = [...state.fields, [newField]];
          return { fields: updatedFields };
        });
      },
      removeRow: (rowIndex: number) => {
        set((state) => ({
          fields: state.fields.filter((_, index) => index !== rowIndex),
        }));
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
