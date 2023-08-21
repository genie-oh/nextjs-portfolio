import { FunctionComponent } from "react";
const CvHeader: FunctionComponent<{
  pageNow?: number;
  pageAll?: number;
  pageTitle: string;
  pageTitleSub: string;
}> = ({ pageNow, pageAll, pageTitle, pageTitleSub }) => {
  return (
    <div>
      {pageNow && pageAll && (
        <>
          <div className="flex items-end justify-end pt-1.5 pb-1 mb-2 border-b-8 border-gray-200">
            <div className="pr-3 text-xs ">
              Page {pageNow} / {pageAll}
            </div>
          </div>
        </>
      )}

      <div className="text-sm">
        <div className="px-3 py-1 text-white bg-gray-700">
          <div className="text-xl font-bold ">{pageTitle}</div>
          <div className="">{pageTitleSub}</div>
        </div>
      </div>
    </div>
  );
};

export default CvHeader;
