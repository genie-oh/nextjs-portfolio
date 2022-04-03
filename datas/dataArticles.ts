import { I_Article } from "./types/I_Article";

export const dataArticles: I_Article[] = [
    {
        imgUrl: "/img/articles/mockoon2.png",
        categories: ["php", "error handling", "exception", "oop", "software architecture"],
        title_i18n: {
            ja: "[Backend] 外部連携APIのMock API Server化を検討する (Mockoon)",
            ko: "[Backend] 외부연계API의Mock API Server화 검토 (Mockoon)",
            en: "[Backend] Thinking about making external API to Mock API Server with Mockoon",
        },
        text_i18n: {
            ja: "「どうやって外部連携APIをMock化し、ローカルでのテストと維持補修をしやすくするか？」を考えます",
            ko: '"어떻게 외부연계API를 Mock으로 만들어 로컬환경 테스트와 유지보수를 보다 쉽게 할 것인가?"에 대해 생각해봅니다',
            en: 'In this article, consider "How to make an external API to MockAPI to make software to more easier on testing, operating and maintain?"',
        },
        date: "2022.04",
        moreContentType: "url",
        moreContentUrl_i18n: {
            ja: "https://qiita.com/genie-oh/items/b2c8e3cf5f4f1ef34a1f",
            ko: "https://dev.to/genie_oh/try-to-component-oriented-software-architecture-with-middleware-pattern-25dc-temp-slug-6096689",
            en: "https://dev.to/genie_oh/try-to-component-oriented-software-architecture-with-middleware-pattern-25dc-temp-slug-6096689",
        },
        onlySupportLanguages: ["ja", "en"],
    },
    {
        imgUrl: "/img/articles/exception.png",
        categories: ["php", "error handling", "exception", "oop", "software architecture"],
        title_i18n: {
            ja: "[PHP] Exceptionエラー設計原則とアプリケーションへの導入",
            ko: "[PHP] Exception 에러 핸들링 설계 원칙과 어플리케이션 도입",
            en: "[PHP] principle of design of error handling with Exception, and integrate to application",
        },
        text_i18n: {
            ja: "Exceptionコンセプトがどういう設計になっており、どういう原則をもとに扱うべきかを考察します。最後に、Exception設計をアプリケーションに導入する方法を例えを通して説明します。",
            ko: "Exception컨셉이 어떻게 설계되어 있고 어떤 원칙을 따라야 하는지에 대해 생각해 봅니다. 마지막으로 Exception설계를 어플리케이션에 도입하는 방법을 예를 들어 설명합니다.",
            en: "study about that how exception concept is designed, and what principle we should follow. at last, discribe example how integrate exception concept to application.",
        },
        date: "2020.12",
        moreContentType: "url",
        moreContentUrl_i18n: {
            ja: "https://qiita.com/genie-oh/items/b2c8e3cf5f4f1ef34a1f",
            ko: "https://qiita.com/genie-oh/items/b2c8e3cf5f4f1ef34a1f",
            en: "https://qiita.com/genie-oh/items/b2c8e3cf5f4f1ef34a1f",
        },
        onlySupportLanguages: ["ja"],
    },
    {
        imgUrl: "/img/articles/he.png",
        categories: ["homomorphic", "encryption", "security"],
        title_i18n: {
            ja: "[Crypto] E(1) + E(2) = E(3)？同型暗号化。暗号化されたまま演算を行う技術",
            ko: "[Crypto] E(1) + E(2) = E(3)？동형암호화。암호화데이터를 유지하며 연산을 수행하는 기술",
            en: "[Crypto] outline of homomorphic encryption",
        },
        text_i18n: {
            ja: "同型暗号の定義、原則、世代、長所・短所、オープンソースなどに対して軽く説明します。",
            ko: "동형암호화의 정의, 원칙, 세대, 장단점, 오픈소스 등에 대해 가볍게 다룹니다.",
            en: "study outlines about homomorphic encryption's definition, principle, generations, con & pros, what open sources are.",
        },
        date: "2021.10",
        moreContentType: "url",
        moreContentUrl_i18n: {
            ja: "https://qiita.com/genie-oh/items/18fb7bc977002d35b66f",
            ko: "https://qiita.com/genie-oh/items/18fb7bc977002d35b66f",
            en: "https://qiita.com/genie-oh/items/18fb7bc977002d35b66f",
        },
        onlySupportLanguages: ["ja"],
    },
    {
        imgUrl: "/img/articles/gc.png",
        categories: ["php", "garbage collection", "memory management", "variable control mechanism"],
        title_i18n: {
            ja: "[PHP] なぜGarbageCollection? メモリとGCを意識する (全8記事)",
            ko: "[PHP] 왜 GarbageCollection인가? 메모리와 GC를 의식하자 (총8개의 글)",
            en: "[PHP] Why we know Garbage Collection? give attention to memory and garbage collection. (8 articles)",
        },
        text_i18n: {
            ja: "PHPにおいてのガベージコレクションと変数管理のメカニズムなどを探究します。全８記事として構成されてます。",
            ko: "PHP에서 가비지 컬렉션과 변수 관리 메커니즘 등을 심화하여 다룹니다. 총 8개의 글로 구성되어 있습니다.",
            en: "study deeply about garbage collection and mechanism how variable is handled on php. this is consist of 8 articles.",
        },
        date: "2020.8 ~ 2020.11",
        moreContentType: "url",
        moreContentUrl_i18n: {
            ja: "https://qiita.com/genie-oh/items/e6dfc49fb9899f931271",
            ko: "https://qiita.com/genie-oh/items/e6dfc49fb9899f931271",
            en: "https://qiita.com/genie-oh/items/e6dfc49fb9899f931271",
        },
        onlySupportLanguages: ["ja"],
    },
    {
        imgUrl: "/img/articles/agile.png",
        categories: ["agile", "project", "business"],
        title_i18n: {
            ja: "[Project] Agileで落ちやすい罠",
            ko: "[Project] 애자일 개발에서 빠지기 쉬운 함정",
            en: "[Project] trap we easily fall in on AGILE projects",
        },
        text_i18n: {
            ja: "株式会社オズビジョンのlightning talk発表会の発表資料",
            ko: "주식회사 오즈비전 lightning talk 발표회 발표자표",
            en: "presentation of lightning talk at OZVISION, Inc.",
        },
        date: "2020.3",
        moreContentType: "url",
        moreContentUrl_i18n: {
            ja: "https://qiita.com/genie-oh/items/48862c24455134bea114",
            ko: "https://qiita.com/genie-oh/items/48862c24455134bea114",
            en: "https://qiita.com/genie-oh/items/48862c24455134bea114",
        },
        onlySupportLanguages: ["ja"],
    },
    {
        imgUrl: "/img/articles/nice.png",
        categories: ["linux", "os", "process", "priority", "nice"],
        title_i18n: {
            ja: "[Linux] niceコマンドで知るプロセスと優先順位",
            ko: "[Linux] nice커맨드로 알아보는 프로세스 우선순위",
            en: "[Linux] study priority of process using nice command.",
        },
        text_i18n: {
            ja: "株式会社オズビジョンの勉強会の発表資料",
            ko: "주식회사 오즈비전 스터디 회의 발표자표",
            en: "presentation of study talk at OZVISION, Inc.",
        },
        date: "2020.3",
        moreContentType: "url",
        moreContentUrl_i18n: {
            ja: "https://qiita.com/genie-oh/items/27f7a12c5d1f60be6a76",
            ko: "https://qiita.com/genie-oh/items/27f7a12c5d1f60be6a76",
            en: "https://qiita.com/genie-oh/items/27f7a12c5d1f60be6a76",
        },
        onlySupportLanguages: ["ja"],
    },
];
