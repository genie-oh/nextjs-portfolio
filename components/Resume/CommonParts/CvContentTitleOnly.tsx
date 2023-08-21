import { FunctionComponent } from "react";

type CvData = {
  period: string;
  title: string;
  isGray?: boolean;
};

const CvContentTitleOnly: FunctionComponent<{
  headText?: string;
  cvDatas: CvData[];
}> = ({ headText, cvDatas }) => {
  return (
    <ol className="relative pt-2 text-xs border-l border-gray-200 dark:border-gray-700">
      {headText && (
        <div className="pl-2 font-bold text-red-900">{headText}</div>
      )}

      {cvDatas.map((data) => {
        return (
          <>
            <li className="grid items-center justify-start grid-cols-4 ml-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="pt-0.5 block text-xs leading-none text-gray-400 dark:text-gray-500">
                {data.period}
              </time>
              <h3
                className={
                  "whitespace-pre-wrap pt-0.5 col-span-3 block mx-2 text-xs dark:text-white " +
                  (data.isGray
                    ? "text-gray-400"
                    : "text-purple-900 font-semibold")
                }
              >
                {data.title}
              </h3>
            </li>
          </>
        );
      })}
    </ol>
  );
};

export default CvContentTitleOnly;
