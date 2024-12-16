"use client";
import React from "react";
import { TField } from "@/types/field";

export const useField = (initialField?: Partial<TField>) => {
  const [field, setField] = React.useState<TField>({
    rowNumber: 0,
    type: "input",
    description: "",
    placeholder: "",
    className: "",
    name: "",
    isRequired: false,
    isDisabled: false,
    ...initialField,
  });

  const updateField = (updates: Partial<TField>) => {
    setField((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const resetField = () => {
    setField({
      rowNumber: 0,
      type: "input",
      description: "",
      placeholder: "",
      className: "",
      name: "",
      isRequired: false,
      isDisabled: false,
    });
  };

  return {
    field,
    updateField,
    resetField,
  };
};
