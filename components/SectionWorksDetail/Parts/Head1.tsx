import { FunctionComponent } from "react";

export const Head1: FunctionComponent<{ children }> = ({ children }) => {
  return (
    <h1 className="my-5 text-2xl font-bold text-blue-700 border-b-2 border-blue-300">
      {children}
    </h1>
  );
};
