import FieldOptionCollection from "@/components/HOC/fieldOptionCollection";
import FieldOptionArranger from "@/components/pageComponents/form/fieldOptionArranger";
import FieldOptionRenderer from "@/components/pageComponents/form/FieldOptionRenderer";

const FormPage = () => {
  return (
    <div className="grid grid-cols-12 gap-4 px-20 py-2">
      <div className="col-span-2">
        <FieldOptionCollection />
      </div>
      <div className="col-span-4">
        <FieldOptionArranger />
      </div>
      <div className="col-span-6">
        <FieldOptionRenderer />
      </div>
    </div>
  );
};

export default FormPage;
