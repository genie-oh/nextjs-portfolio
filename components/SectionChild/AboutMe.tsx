import AboutMeProfile from "../SectionChildParts/AboutMeProfile";
import AboutMeStrength from "../SectionChildParts/AboutMeStrength";
import AboutMeSkills from "../SectionChildParts/AboutMeSkills";
import { dataEngineeringSkills } from "../../datas/dataEngineeringSkills";

const AboutMe = () => {
    return (
        <div className="my-20">
            <div className="grid grid-cols-1 pt-10 lg:grid-cols-2">
                <AboutMeProfile />
                <AboutMeStrength />
            </div>

            <AboutMeSkills label="Engineering Skills" data={dataEngineeringSkills} />
            <div className="m-5 bg-gray-100 h-96">development skills</div>
        </div>
    );
};

export default AboutMe;
