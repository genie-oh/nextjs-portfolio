import PageLayout from "../components/Resume/PageLayout";
import { ResumeNav } from "../components/Resume/CommonParts/Nav";
import CV_1 from "../components/Resume/Contents/CV/CV_1";
import CV_2 from "../components/Resume/Contents/CV/CV_2";
import CV_3 from "../components/Resume/Contents/CV/CV_3";
import CV_4 from "../components/Resume/Contents/CV/CV_4";
import CV_5 from "../components/Resume/Contents/CV/CV_5";
import CV_6 from "../components/Resume/Contents/CV/CV_6";

export default function CV() {
  return (
    <div className="text-gray-700 container-fluid">
      <ResumeNav />
      <div className="pb-12 resume-top-pad"></div>
      <div className="resume-book">
        <PageLayout label="curriculum vitae" colorClName="bg-purple-900">
          <CV_6 />
        </PageLayout>
        <PageLayout label="curriculum vitae" colorClName="bg-purple-900">
          <CV_5 />
        </PageLayout>
        <PageLayout label="curriculum vitae" colorClName="bg-purple-900">
          <CV_4 />
        </PageLayout>
        <PageLayout label="curriculum vitae" colorClName="bg-purple-900">
          <CV_3 />
        </PageLayout>
        <PageLayout label="curriculum vitae" colorClName="bg-purple-900">
          <CV_2 />
        </PageLayout>
        <PageLayout label="curriculum vitae" colorClName="bg-purple-900">
          <CV_1 />
        </PageLayout>
      </div>
    </div>
  );
}
