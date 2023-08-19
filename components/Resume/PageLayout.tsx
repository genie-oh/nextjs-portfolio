import { FunctionComponent, ReactNode } from "react";
import LeftSide from "./CommonParts/LeftSide";

const PageLayout: FunctionComponent<{
  label: string;
  colorClName: string;
  children;
}> = ({ label, colorClName, children }) => {
  return (
    <div className="resume-page">
      <div className="overflow-hidden resume-subpage">
        <div className="grid grid-cols-12 ">
          <LeftSide label={label} colorClName={colorClName} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
