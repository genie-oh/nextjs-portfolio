import AboutMeProfile from "../SectionChildParts/AboutMeProfile";

const AboutMe = () => {
    return (
        <div className="my-20">
            <div className="grid grid-cols-1 pt-10 lg:grid-cols-2">
                <AboutMeProfile />
                <div className="m-5 bg-gray-100 h-96">strength34</div>
            </div>

            <div className="m-5 bg-gray-100 h-96">engineering skills</div>
            <div className="m-5 bg-gray-100 h-96">development skills</div>
        </div>
    );
};

export default AboutMe;
