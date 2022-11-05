import { dataWorks } from "../../datas/dataWorks";
import GridItemView from "../SectionChildParts/GridItemView";

const Works = () => {
    return <GridItemView articleDatas={dataWorks} firstLoadedTimes={2} />;
};

export default Works;
