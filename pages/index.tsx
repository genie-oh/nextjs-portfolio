import HomeContext from "../components/Context/HomeContext";

export default function Home() {
    return (
        <HomeContext.Provider value={{}}>
            <div className="bg-blue-100">
                <p>
                    Hello!
                    <br />
                    こんにちは!
                    <br />
                    안녕하세요!
                </p>
            </div>
        </HomeContext.Provider>
    );
}
