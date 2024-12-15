"use client";
import Field from "@/components/HOC/Field";
import useFieldStore from "@/store/fieldStore";
import { TFieldRow } from "@/types/field";

const FieldRow = ({ fieldRow }: { fieldRow: TFieldRow }) => {
  return (
    <div className="flex gap-3">
      {fieldRow.map((field, i) => (
        <Field
          id={i}
          key={i}
          Name={field.Name}
          className={field.className}
          description={field.description}
          isDisabled={field.isDisabled}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
          rowNumber={field.rowNumber}
          type={field.type}
        />
      ))}
    </div>
  );
};

const FieldOptionRenderer = () => {
  const { fields } = useFieldStore();

  return (
    <div>
      {fields.map((fieldRow, i) => (
        <FieldRow key={i} fieldRow={fieldRow} />
      ))}
    </div>
  );
};

export default FieldOptionRenderer;
