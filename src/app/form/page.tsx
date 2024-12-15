import FieldOptionCollection from "@/components/HOC/fieldOptionCollection";
import FieldOptionArranger from "@/components/pageComponents/form/fieldList";
import FieldOptionRenderer from "@/components/pageComponents/form/fieldSelector";

const FormPage = () => {
  return (
    <div className="gap-4 px-20 py-2 md:grid md:grid-cols-12">
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
