import GridItemView from "../SectionChildParts/GridItemView";
import { dataArticles } from "../../datas/dataArticles";

const Articles = () => {
  return <GridItemView articleDatas={dataArticles} />;
};

export default Articles;
