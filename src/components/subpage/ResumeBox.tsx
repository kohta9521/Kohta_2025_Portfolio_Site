import React from "react";

// props
export type ResumeBoxProps = {
    id: string;
    children: React.ReactNode;
}


// components



const ResumeBox = ({
    id,
    children
}: ResumeBoxProps) => {
  return (
    <div key={id} className="w-full h-auto">
        {children}
    </div>
  );
};

export default ResumeBox;
