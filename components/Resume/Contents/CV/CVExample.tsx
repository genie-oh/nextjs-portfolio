import { FunctionComponent } from "react";
import CvContainer from "../../CommonParts/CvContainer";
import CvHeader from "../../CommonParts/CvHeader";
import CvContent from "../../CommonParts/CvContent";
import CvQuote from "../../CommonParts/CvQuote";
import CvContentTitleOnly from "../../CommonParts/CvContentTitleOnly";
import i18nData from "../../../../i18n/i18nData";
const CVExample: FunctionComponent<{}> = () => {
  return (
    <CvContainer>
      <CvHeader
        pageAll={8}
        pageNow={1}
        pageTitle="Page title"
        pageTitleSub="Page title sub"
      />
      <CvContent
        cvDatas={[
          {
            period: "20202 xx ~ 20202 xxxx",
            title: "title",
            body: [
              {
                title: "body1",
                items: ["item1", "item2"],
              },
            ],
          },
          {
            period: "20202 xx ~ 20202 xxxx",
            title: "title",
            body: [
              {
                title: "body1",
                items: ["item1", "item2"],
              },
            ],
          },
        ]}
      ></CvContent>
      <CvContentTitleOnly
        headText="abcde"
        cvDatas={[
          {
            period: "202xx ~ 20xx",
            title: "abcde",
          },
          {
            period: "202xx ~ 20xx",
            title: "abcde",
          },
        ]}
      />
      <CvQuote
        cvQuoteDatas={[
          {
            title: "PJ計画作成\nマイルストーン定義",
            img: "/img/works/works_ozvision_hapitas/milestone.png",
          },
          {
            title: "PJ計画作成\nマイルストーン定義",
            img: "/img/works/works_ozvision_hapitas/milestone.png",
          },
          {
            title: "PJ計画作成\nマイルストーン定義",
            img: "/img/works/works_ozvision_hapitas/milestone.png",
          },
        ]}
      />
      <CvHeader
        pageTitle={i18nData({
          ja: "シニア・ウェブエンジニア",
          ko: "",
          en: "",
        })}
        pageTitleSub={i18nData({
          ja: "株式会社オズビジョン ｜ ハピタス・ポイントサービス",
          ko: "",
          en: "",
        })}
      />
    </CvContainer>
  );
};

export default CVExample;
