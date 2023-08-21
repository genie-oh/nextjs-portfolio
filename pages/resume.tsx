import PageLayout from "../components/Resume/PageLayout";
import { ResumeNav } from "../components/Resume/CommonParts/Nav";
import Resume1 from "../components/Resume/Contents/Resume/Resume1";

export default function Resume() {
  return (
    <div className="text-gray-700 container-fluid">
      <ResumeNav />
      <div className="pb-12 resume-top-pad"></div>
      <div className="resume-book">
        <PageLayout label="resume" colorClName="bg-blue-900">
          <Resume1 />
        </PageLayout>
      </div>
    </div>
  );
}
