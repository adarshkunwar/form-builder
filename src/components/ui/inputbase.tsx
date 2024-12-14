import React from "react";
type InputBaseProps = {
  children: React.ReactNode;
  className?: string;
};

const InputBase = ({ children, className = "" }: InputBaseProps) => {
  return (
    <div
      className={` relative w-full rounded-lg border border-gray-300 transition-all duration-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 ${className} `}
    >
      {children}
    </div>
  );
};
export default InputBase;
