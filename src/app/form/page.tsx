import FieldOptionCollection from "@/components/HOC/fieldOptionCollection";
import FieldOptionRenderer from "@/components/pageComponents/form/FieldOptionRenderer";

const FormPage = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="grid-cols-2">
        <FieldOptionCollection />
      </div>
      <div className="grid-cols-4">
        <FieldOptionRenderer />
      </div>
    </div>
  );
};

export default FormPage;
