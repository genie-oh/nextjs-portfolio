import { FunctionComponent } from "react";
import ResumeObjective from "./1/ResumeObjective";
import Skills from "./1/Skills";
import WorkExperiences from "./1/WorkExperiences";
import Educations from "./1/Educations";

const Resume1: FunctionComponent<{}> = ({}) => {
  return (
    <>
      <div
        className="col-span-9 mx-1 text-sm bg-white border-l-4 border-gray-200 "
        style={{ padding: "0.75cm 0cm 0.75cm 0.25cm" }}
      >
        <div className="p-3 pb-0 mb-5 mr-5 border-2 shadow-md rounded-xl">
          <ResumeObjective></ResumeObjective>
        </div>
        <div className="p-3 pb-0 mt-3 mb-5 mr-5 border-2 shadow-md rounded-xl">
          <Skills></Skills>
        </div>
        <div className="p-3 pb-0 mt-3 mb-6 mr-5 border-2 shadow-md rounded-xl">
          <WorkExperiences></WorkExperiences>
        </div>
        <div className="p-3 pb-0 mt-3 mb-6 mr-5 border-2 shadow-md rounded-xl">
          <Educations></Educations>
        </div>
      </div>
    </>
  );
};

export default Resume1;
