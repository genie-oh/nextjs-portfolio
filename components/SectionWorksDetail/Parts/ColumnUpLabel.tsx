import React, { FunctionComponent } from "react";

const ColumnUpLabel: FunctionComponent<{
    label?: string;
    roundedChildren?: boolean;
    centerChildren?: boolean;
    colspan?: number;
    children?;
}> = ({ label, roundedChildren, centerChildren, colspan, children }) => {
    const clCenterChildren = centerChildren ? "h-full flex justify-start items-center " : "";
    const clRoundedChildren = roundedChildren ? "rounded-xl overflow-hidden " : "";

    return (
        <div
            className={
                "text-xs md:text-base h-full overflow-hidden bg-gray-200 rounded-md " +
                (colspan ? `col-span-${colspan}` : "")
            }
        >
            {label && (
                <div
                    className={
                        "px-2 whitespace-pre-wrap flex items-center justify-center py-1 fofnt-bold text-center text-white bg-blue-500 rounded-t-md " +
                        (!children ? "h-full" : "h-12 md:h-16")
                    }
                >
                    {label}
                </div>
            )}
            {children && (
                <div className={" whitespace-pre-wrap p-3 " + clCenterChildren + clRoundedChildren}>{children}</div>
            )}
        </div>
    );
};

export default ColumnUpLabel;
