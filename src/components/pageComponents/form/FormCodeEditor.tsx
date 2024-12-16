import React from "react";
import useFieldStore from "@/store/fieldStore";
import FormSourceCode from "./formSourceCode";

const FormCodePreview: React.FC = () => {
  const { fields } = useFieldStore();

  return <FormSourceCode fields={fields} />;
};

export default FormCodePreview;
