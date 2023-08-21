import { dataResumeSkills } from "../../../../../datas/resume/dataResumeSkills";
import i18nData from "../../../../../i18n/i18nData";

const Skills = () => {
  return (
    <>
      <div className="font-bold w-1/2 py-0.5 pl-4 -mt-6 -ml-2 text-white bg-gray-700 rounded-full">
        Skills
      </div>
      <div className="mt-1">
        <div className="mb-2 text-xs">
          <div className="flex">
            {dataResumeSkills.map((skill, idx) => {
              return (
                <>
                  <div
                    className={"w-1/2 px-4" + (idx === 0 ? " border-r-2" : "")}
                  >
                    <p className="mx-1 my-0 italic font-bold underline">
                      {skill.title}
                    </p>
                    <p className="mx-1 mt-1 mb-0">
                      <ul>
                        {i18nData(skill.items).map((item) => {
                          return <li>{item}</li>;
                        })}
                      </ul>
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
