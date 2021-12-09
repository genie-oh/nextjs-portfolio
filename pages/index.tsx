import HomeContext from "../components/Context/HomeContext";
import { GlobalMenu } from "../components/GlobalMenu";
import Section from "../components/Section";
import AboutMe from "../components/SectionChild/AboutMe";
import SalesPoint from "../components/SectionChild/SalesPoint";
import Top from "../components/SectionChild/Top";
import SectionFooter from "../components/SectionFooter";

import WaveDividerBottom from "../components/WaveDivider/WaveDividerBottom";
import WaveDividerTop from "../components/WaveDivider/WaveDividerTop";

export default function Home() {
    const HomeContextFunctions: { scrollTo: Function } = (function () {
        function scrollTo(id: string) {
            document.getElementById("page-contents").scrollTo({
                top: document.getElementById(id).offsetTop,
                behavior: "smooth",
            });
        }

        return {
            scrollTo: scrollTo,
        };
    })();

    const styleSectionTop = { background: "linear-gradient(29deg, rgba(249,86,179,1) 0%, rgba(240,111,76,1) 100%)" };
    const styleSectionA = { background: "#FFD000" };
    const styleSectionB = { background: "#FFEFCA" };

    return (
        <HomeContext.Provider value={{ HomeContextFunctions }}>
            <div id="outer-container" className="bg-gray-700">
                <GlobalMenu />
                <div id="page-wrap" className="relative h-screen overflow-hidden">
                    <main id="page-contents" className="h-screen overflow-y-auto">
                        <Section id="SEC-TOP" className="h-screen" style={styleSectionTop}>
                            <Top />
                            <WaveDividerBottom />
                        </Section>
                        <Section id="SEC-SALESPOINT" title="My Sales Point" style={styleSectionA}>
                            <SalesPoint />
                        </Section>
                        <Section id="SEC-ABOUTME" title="About Me" style={styleSectionB}>
                            <WaveDividerTop />
                            <AboutMe />
                            <WaveDividerBottom />
                        </Section>
                        <Section id="SEC-WORKS" title="Works" style={styleSectionA}>
                            <div className="h-96">Works</div>
                        </Section>
                        <Section id="SEC-CAREERS" title="Careers" style={styleSectionB}>
                            <WaveDividerTop />
                            <div className="h-96">Careers</div>
                            <WaveDividerBottom />
                        </Section>
                        <Section id="SEC-ARTICLES" title="Articles" style={styleSectionA}>
                            <div className="h-96">Articles</div>
                        </Section>
                        <Section id="SEC-CONTACTME" title="Contact Me" style={styleSectionB}>
                            <WaveDividerTop />
                            <div className="h-96">Contact Me</div>
                        </Section>

                        <SectionFooter />
                    </main>
                </div>
            </div>
        </HomeContext.Provider>
    );
}
