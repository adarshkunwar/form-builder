export type TField = {
  rowNumber: number;
  type: string;
  description: string;
  placeholder: string;
  className: string;
  Name: string;
  isRequired: boolean;
  isDisabled: boolean;
};

export type TFieldRow = TField[];

export type TFieldCollection = TFieldRow[];
