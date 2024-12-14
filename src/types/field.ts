import { fieldsArray } from "@/data/field";

export type FieldType = (typeof fieldsArray)[number];

export type TField = {
  rowNumber: number;
  type: FieldType;
  description: string;
  placeholder: string;
  className: string;
  Name: string;
  isRequired: boolean;
  isDisabled: boolean;
};

export type TFieldRow = TField[];

export type TFieldCollection = TFieldRow[];
