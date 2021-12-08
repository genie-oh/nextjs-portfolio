import { I_i18n } from "../i18n/Types/I_i18n";

interface I_struct {
    imgUrl: string;
    title: string;
    text_i18n: I_i18n<string>;
}

export const dataMySalesPoint: I_struct[] = [
    {
        imgUrl: "/img/sales_point/architect.svg",
        title: `Architecting\nback-end`,
        text_i18n: {
            ja: `Back-endシステムのアーキテクチャー設計、開発、運用を主力技術として高めております。`,
            ko: `백엔드 시스템의 아키텍처 설계,\n개발, 운용이 주력 기술입니다`,
            en: `Specialize\nBack-end System Architecting,\nDevelopment, Operation`,
        },
    },
    {
        imgUrl: "/img/sales_point/payment.svg",
        title: `Payment service\nknow-how`,
        text_i18n: {
            ja: `決済代行サービスの開発分野で\n５年以上の経験を保有しております`,
            ko: `결제 대행 서비스의 개발 분야에서\n5년 이상의 경험을 보유하고 있습니다`,
            en: `Experienced\npayment gateway service\ndevelopment over 5 years`,
        },
    },
    {
        imgUrl: "/img/sales_point/requirement.svg",
        title: `Requirement\ninsighting`,
        text_i18n: {
            ja: `Back-endシステムのアーキテクチャー設計、開発、運用を主力技術として高めております。`,
            ko: `요건정의, 문서화에 대해\n높은 스킬을 가지고 있습니다`,
            en: `Special Skills\nrequirement definition\nand documentation`,
        },
    },
    {
        imgUrl: "/img/sales_point/multirole.svg",
        title: `Available\nMany Roles`,
        text_i18n: {
            ja: `提案、プロジェクト管理、研究開発など\nいろんな分野においてプレーヤーとして\n業務を遂行可能です`,
            ko: `제안, 프로젝트관리, 연구개발 등\n다양한 분아에서 플레이어로써\n업무를 수행할 수 있습니다.`,
            en: `can do it as multi-role player\nwhich are proposal, management, research and develop, etc`,
        },
    },
];
