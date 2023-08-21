import { I_i18n } from "../i18n/Types/I_i18n";

interface I_Signature {
  name_i18n: I_i18n<string>;
  toolTopText_i18n: I_i18n<string>;
  colorType: "green" | "blue" | "purple" | "yellow";
}

export const dataStrengthSignature: I_Signature[] = [
  {
    name_i18n: {
      ja: "着想(Ideation)",
      ko: "발상(Ideation)테마",
      en: "Ideation",
    },
    toolTopText_i18n: {
      ja: "あなたはアイデアに魅力を感じます。一見共通点のない現象に関連性を見出すことができます。",
      ko: "당신은 아이디어에 매료되어 있습니다. 당신은 언뜻 보기에는 전혀 상관이 없어 보이는 현상들의 연관성을 찾아낼 수 있습니다.",
      en: "People exceptionally talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena.",
    },
    colorType: "green",
  },
  {
    name_i18n: {
      ja: "親密性(Relator)",
      ko: "친밀성(Relator)테마",
      en: "Relator",
    },
    toolTopText_i18n: {
      ja: "あなたは、他の人との親密な人間関係を好みます。目標達成のために友人と努力することから、大きな満足感を得ます。",
      ko: "당신은 다른 사람들과 친밀한 관계를 맺는 것을 좋아합니다. 당신은 친밀한 사람들과 함께 목표를 향해 열심히 일하는 데에서 깊은 만족감을 얻습니다.",
      en: "People exceptionally talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal.",
    },
    colorType: "blue",
  },
  {
    name_i18n: {
      ja: "責任感(Responsibility)",
      ko: "책임(Responsibility)테마",
      en: "Responsibility",
    },
    toolTopText_i18n: {
      ja: "あなたは、実行すると発言したことに対して心理的な責任感を持ち、誠実さや忠実さといった不変的な価値観 を大事にします。",
      ko: "당신은 자신이 하겠다고 말한 것에 대해 심리적인 의무감을 갖습니다. 이들은 정직과 헌신적 애정과 같은 안정된 가치에 따르려고 노력합니다.",
      en: "People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty.",
    },
    colorType: "purple",
  },
  {
    name_i18n: {
      ja: "戦略性(Strategic)",
      ko: "전략(Strategic)테마",
      en: "Strategic",
    },
    toolTopText_i18n: {
      ja: "あなたは、先に進むために別の選択肢も想定します。いかなる想定に直面しようとも、適切なパターンと問題 点を直ちに予測することができます。",
      ko: "당신은 일을 진행하는 데 있어서 다양한 대안을 생각해냅니다. 당신은 어떠한 상황에 직면하더라도 신속 하게 그 상황에 관련된 패턴과 이슈를 파악할 수 있습니다.",
      en: "People exceptionally talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues.",
    },
    colorType: "green",
  },
  {
    name_i18n: {
      ja: "個別化(Individualization)",
      ko: "개별화(Individualization)테마",
      en: "Individualization",
    },
    toolTopText_i18n: {
      ja: "あなたは、各人のユニークな資質に関心を持ちます。異なるタイプの人たちの集団をまとめ、生産性の高いチ ームを作ることに長けています。",
      ko: "당신은 각 개인의 고유한 특징에 매력을 느낍니다. 당신은 서로 다른 사람들이 어떻게 협력해서 생산적 으로 일할 수 있는지를 알아내는 재능을 가지고 있습니다.",
      en: "People exceptionally talented in the Individualization theme are intrigued with the unique qualities of each person. They have a gift for figuring out how different people can work together productively.",
    },
    colorType: "blue",
  },
];
