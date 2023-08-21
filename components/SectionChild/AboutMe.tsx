import AboutMeProfile from "../SectionChildParts/AboutMeProfile";
import AboutMeStrength from "../SectionChildParts/AboutMeStrength";
import AboutMeSkills from "../SectionChildParts/AboutMeSkills";
import { dataEngineeringSkills } from "../../datas/dataEngineeringSkills";
import { dataDevelopmentSkills } from "../../datas/dataDevelopmentSkills";

const AboutMe = () => {
  return (
    <div className="my-20">
      <div className="grid grid-cols-1 pt-10 lg:grid-cols-2">
        <AboutMeProfile />
        <AboutMeStrength />
      </div>

      <AboutMeSkills label="Engineering Skills" data={dataEngineeringSkills} />
      <AboutMeSkills label="Development Skills" data={dataDevelopmentSkills} />
    </div>
  );
};

export default AboutMe;
