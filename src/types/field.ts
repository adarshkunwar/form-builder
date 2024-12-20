import { fieldsArray } from "@/data/field";

export type FieldType = (typeof fieldsArray)[number];

export type TField = {
  id: number;
  rowNumber: number;
  type: FieldType;
  description: string;
  placeholder: string;
  className: string;
  name: string;
  isRequired: boolean;
  isDisabled: boolean;
};

export type TFieldRow = TField[];

export type TFieldCollection = TFieldRow[];
