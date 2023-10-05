import { useState } from "react";

import HomeContext from "../components/Context/HomeContext";
import { GlobalMenu } from "../components/GlobalMenu";
import Section from "../components/Section";
import AboutMe from "../components/SectionChild/AboutMe";
import Articles from "../components/SectionChild/Articles";
import Careers from "../components/SectionChild/Careers";
import ContactMe from "../components/SectionChild/ContactMe";
import SalesPoint from "../components/SectionChild/SalesPoint";
import Top from "../components/SectionChild/Top";
import Works from "../components/SectionChild/Works";
import SectionFooter from "../components/SectionFooter";

import WaveDividerBottom from "../components/WaveDivider/WaveDividerBottom";
import WaveDividerTop from "../components/WaveDivider/WaveDividerTop";

export default function Home() {
  const [blurClass, updateBlurClass] = useState("");

  const HomeContextFunctions: { scrollTo: Function } = (function (
    updateBlurClass
  ) {
    function toggleBlur(blur: boolean) {
      blur ? updateBlurClass("blur-md") : updateBlurClass("");
    }

    function toggleOverFlowHiddenOrAutoOnBody(overflowHidden: boolean) {
      overflowHidden
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
    }

    function scrollTo(id: string) {
      document.getElementById("page-contents").scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: "smooth",
      });
    }

    return {
      toggleBlur: toggleBlur,
      toggleOverFlowHiddenOrAutoOnBody: toggleOverFlowHiddenOrAutoOnBody,
      scrollTo: scrollTo,
    };
  })(updateBlurClass);

  const styleSectionTop = {
    background: "rgb(253, 234, 205)",
  };
  const styleSectionA = { background: "#FFD000" };
  const styleSectionB = { background: "#FFEFCA" };

  return (
    <HomeContext.Provider value={{ HomeContextFunctions }}>
      <div id="outer-container" className="bg-gray-700">
        <GlobalMenu />
        <div
          id="page-wrap"
          className={`relative h-screen overflow-hidden filter ${blurClass}`}
        >
          <main id="page-contents" className="h-screen overflow-y-auto">
            <Section id="SEC-TOP" className="h-screen" style={styleSectionTop}>
              <Top />
              <WaveDividerBottom />
            </Section>
            <Section
              id="SEC-SALESPOINT"
              title="My Sales Point"
              style={styleSectionA}
            >
              <SalesPoint />
            </Section>
            <Section id="SEC-ABOUTME" title="About Me" style={styleSectionB}>
              <WaveDividerTop />
              <AboutMe />
              <WaveDividerBottom />
            </Section>
            <Section id="SEC-WORKS" title="Works" style={styleSectionA}>
              <Works />
            </Section>
            <Section id="SEC-CAREERS" title="Careers" style={styleSectionB}>
              <WaveDividerTop />
              <Careers />
              <WaveDividerBottom />
            </Section>
            <Section id="SEC-ARTICLES" title="Articles" style={styleSectionA}>
              <Articles />
            </Section>
            <Section
              id="SEC-CONTACTME"
              title="Contact Me"
              style={styleSectionB}
            >
              <WaveDividerTop />
              <ContactMe />
            </Section>

            <SectionFooter />
          </main>
        </div>
      </div>
    </HomeContext.Provider>
  );
}
