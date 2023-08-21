import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { dataResumeWorkExperiences } from "../../../../../datas/resume/dataResumeWorkExperiences";
import i18nData from "../../../../../i18n/i18nData";

const WorkExperiences = () => {
  return (
    <>
      <div className="font-bold w-1/2 py-0.5 pl-4 -mt-6 -ml-2 text-white bg-gray-700 rounded-full">
        Work Experiences
      </div>
      <div className="mt-1 mb-2 mr-5 font-xs">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {dataResumeWorkExperiences.map((experience) => {
            return (
              <li className="mb-2 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-foll mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-xs font-normal leading-3 text-gray-500 dark:text-gray-500">
                  <span>
                    <HiOutlineOfficeBuilding className="inline pr-1" />
                    {experience.company}
                  </span>
                </time>
                <div className="text-xs italic font-bold leading-5 text-gray-900 underline decoration-2 dark:text-white">
                  {experience.role}
                </div>
                <div className="text-xs font-normal text-gray-900 dark:text-gray-400">
                  <ol className="pl-4 leading-5 list-disc">
                    {experience.items.map((i18nItem) => {
                      const item = i18nData(i18nItem);
                      return (
                        <>
                          <li>{item.title}</li>
                          <ol className="pl-3 whitespace-pre-wrap list-disc">
                            {item.contents?.map((content, _idx) => {
                              return (
                                <>
                                  <li>{content}</li>
                                </>
                              );
                            })}
                          </ol>
                        </>
                      );
                    })}
                  </ol>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default WorkExperiences;
