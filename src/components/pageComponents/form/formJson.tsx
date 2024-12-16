import useFieldStore from "@/store/fieldStore";

const FormJson = () => {
  const { fields } = useFieldStore();
  return <pre>{JSON.stringify(fields, null, 2)}</pre>;
};

export default FormJson;
