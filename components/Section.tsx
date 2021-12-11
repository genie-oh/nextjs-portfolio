import { FunctionComponent } from "react";

const Section: FunctionComponent<{
    id: string;
    title?: string;
    className?: string;
    style?: object;
    children?;
}> = ({ id, title = null, className = "", style = {}, children = null }) => {
    return (
        <section id={id} className={"relative w-full " + className} style={style}>
            <div className="h-full py-10 mx-auto overflow-hidden max-w-screen-2xl xl:py-32">
                {title && <h1 className="w-full mb-5 text-3xl font-bold text-center lg:text-5xl xl:mb-24">{title}</h1>}
                {children && children}
            </div>
        </section>
    );
};

export default Section;
