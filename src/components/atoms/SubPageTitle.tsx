import React from "react";

// props
export type SubPageTitleProps = {
  id: string;
  title: string;
};

const SubPageTitle = ({ id, title }: SubPageTitleProps) => {
  return (
    <>
      <h1
        key={id}
        className="block text-red-600 font-semibold text-xl mb-3 sm:text-2xl"
      >
        {title}
      </h1>
      <div className="flex w-full mb-10">
        <span className="block w-3/12 h-0.5 bg-red-600 sm:w-1/12"></span>
        <span className="block w-9/12 h-0.5 bg-gray-400 sm:w-11/12"></span>
      </div>
    </>
  );
};

export default SubPageTitle;
