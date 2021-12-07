import HomeContext from "../components/Context/HomeContext";

import WaveDividerBottom from "../components/WaveDivider/WaveDividerBottom";
import WaveDividerTop from "../components/WaveDivider/WaveDividerTop";

export default function Home() {
    const clSection = "relative bg-blue-300 h-screen flex justify-center items-center";
    return (
        <HomeContext.Provider value={{}}>
            <div>
                {/* GlobalMenu */}
                <div>
                    <main>
                        <section className={clSection}>
                            TOP
                            <WaveDividerBottom />
                        </section>
                        <section className={clSection}>SalesPoint</section>
                        <section className={clSection}>
                            <WaveDividerTop />
                            AboutMe
                            <WaveDividerBottom />
                        </section>
                        <section className={clSection}>Works</section>
                        <section className={clSection}>
                            <WaveDividerTop />
                            Carrers
                            <WaveDividerBottom />
                        </section>
                        <section className={clSection}>Articles</section>
                        <section className={clSection}>
                            <WaveDividerTop />
                            ContactMe
                        </section>

                        <section className="h-16 text-white bg-gray-700">FooterSection</section>
                        {/* Sections */}
                        {/* SectionFooter */}
                    </main>
                </div>
            </div>
        </HomeContext.Provider>
    );
}
