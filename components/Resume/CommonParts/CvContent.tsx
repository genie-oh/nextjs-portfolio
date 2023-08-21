import { FunctionComponent } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

type typeCvBodyLink = {
  title: string;
  link: string;
};

type CvBody = {
  title?: string;
  items?: string[];
  img?: string;
  links?: typeCvBodyLink[];
};

type CvData = {
  period: string;
  title: string;
  titleSub?: string;
  body?: CvBody[];
};

const CvContent: FunctionComponent<{
  cvDatas: CvData[];
}> = ({ cvDatas }) => {
  return (
    <ol className="relative pt-2 text-xs border-l border-gray-200 dark:border-gray-700">
      {cvDatas.map((data) => {
        return (
          <>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="block pt-1.5 text-xs leading-none text-gray-400 dark:text-gray-500">
                {data.period}
              </time>

              <h3 className="block my-1 text-sm font-semibold text-purple-900 whitespace-pre-wrap dark:text-white">
                {data.title}
              </h3>

              {data.titleSub && (
                <div className="mb-3 text-gray-400 whitespace-pre-wrap">
                  {data.titleSub}
                </div>
              )}

              {data.body.map((bodyItem) => {
                return (
                  <>
                    {bodyItem.title && (
                      <div className="text-sm text-gray-900">
                        ■ {bodyItem.title}
                      </div>
                    )}
                    <div className="pb-2 text-xs text-gray-900 ">
                      <ul className="pl-5 list-disc">
                        {bodyItem.items &&
                          bodyItem.items.map((bodyItemsItem) => {
                            return (
                              <li className="whitespace-pre-wrap">
                                {bodyItemsItem}
                              </li>
                            );
                          })}
                      </ul>
                      {bodyItem.img && (
                        <img
                          className="w-3/4 pl-2 mr-5 border-2 shadow-sm rounded-xl"
                          src={bodyItem.img}
                        ></img>
                      )}
                      <ul className="pl-5">
                        {bodyItem.links &&
                          bodyItem.links.map((bodyItemLink) => {
                            return (
                              <li>
                                <a
                                  className="inline-flex items-center justify-start text-blue-500 underline "
                                  target="_blank"
                                  href={bodyItemLink.link}
                                >
                                  <FaExternalLinkAlt
                                    fontSize={16}
                                    className="pr-1"
                                  />
                                  {bodyItemLink.title}
                                </a>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </>
                );
              })}
            </li>
          </>
        );
      })}
    </ol>
  );
};

export default CvContent;
