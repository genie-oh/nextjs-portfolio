import { FunctionComponent } from "react";
const CvContainer: FunctionComponent<{ children }> = ({ children }) => {
  return (
    <div
      className="col-span-9 mx-1 text-sm bg-white border-l-4 border-gray-200 "
      style={{ padding: "0.25cm 0.15cm 0.25cm 0.15cm" }}
    >
      <div className="ml-3">{children}</div>
    </div>
  );
};

export default CvContainer;
