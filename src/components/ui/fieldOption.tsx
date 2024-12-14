"use client";
type FormOptionProps = {
  name: string;
  onclick: () => void;
};
const FormOption = ({ name, onclick }: FormOptionProps) => {
  return (
    <button
      onClick={onclick}
      className="rounded-full border border-black px-4 py-2"
      aria-label={`Add ${name} field`}
      type="button"
    >
      {name}
    </button>
  );
};
export default FormOption;
