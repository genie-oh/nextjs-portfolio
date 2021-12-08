import HomeContext from "../components/Context/HomeContext";
import Section from "../components/Section";
import SalesPoint from "../components/SectionChild/SalesPoint";
import Top from "../components/SectionChild/Top";

import WaveDividerBottom from "../components/WaveDivider/WaveDividerBottom";
import WaveDividerTop from "../components/WaveDivider/WaveDividerTop";

export default function Home() {
    const styleSectionTop = { background: "linear-gradient(29deg, rgba(249,86,179,1) 0%, rgba(240,111,76,1) 100%)" };
    const styleSectionA = { background: "#FFD000" };
    const styleSectionB = { background: "#FFEFCA" };

    return (
        <HomeContext.Provider value={{}}>
            <div>
                {/* GlobalMenu */}
                <div>
                    <main>
                        <Section id="SEC-TOP" className="h-screen" style={styleSectionTop}>
                            <Top />
                            <WaveDividerBottom />
                        </Section>
                        <Section id="SEC-SALESPOINT" title="My Sales Point" style={styleSectionA}>
                            <SalesPoint />
                        </Section>
                        <Section id="SEC-ABOUTME" title="About Me" style={styleSectionB}>
                            <WaveDividerTop />
                            <div className="h-96">About Me</div>
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

                        <section className="h-16 text-white bg-gray-700">FooterSection</section>
                    </main>
                </div>
            </div>
        </HomeContext.Provider>
    );
}
