import { FunctionComponent } from "react";

const LeftBorderList: FunctionComponent<{
    title: string;
    titleBorder: boolean;
    list: string[];
}> = ({ title, titleBorder, list }) => {
    return (
        <div>
            {title && <p className={"mb-2 " + (titleBorder ? "font-bold" : "")}>{title}</p>}

            <ul className="pb-2 pl-5 list-disc">
                {list.map((item, idx) => {
                    return <li key={idx}>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default LeftBorderList;
