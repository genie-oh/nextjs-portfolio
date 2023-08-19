interface I_strcut {
  title: string;
  locale: string;
  code: string;
}

export const languageList: I_strcut[] = [
  { title: "日本語", locale: "ja", code: "JP" },
  { title: "한국어", locale: "ko", code: "KR" },
  { title: "English", locale: "en", code: "US" },
];
