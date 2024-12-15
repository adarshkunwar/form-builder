"use client";
import FieldOptionCollection from "@/components/HOC/fieldOptionCollection";
import FieldRowArranger from "@/components/pageComponents/form/fieldRowArranger";
import FieldOptionRenderer from "@/components/pageComponents/form/fieldSelector";
import { closestCorners, DndContext } from "@dnd-kit/core";

const FormPage = () => {
  return (
    <DndContext collisionDetection={closestCorners}>
      <div className="gap-4 px-20 py-2 md:grid md:grid-cols-12">
        <div className="col-span-2">
          <FieldOptionCollection />
        </div>
        <div className="col-span-4">
          <FieldRowArranger />
          {/* <FieldOptionArranger /> */}
        </div>
        <div className="col-span-6">
          <FieldOptionRenderer />
        </div>
      </div>
    </DndContext>
  );
};

export default FormPage;
