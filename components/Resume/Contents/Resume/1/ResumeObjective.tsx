import i18nData from "../../../../../i18n/i18nData";

const ResumeObjective = () => {
  return (
    <>
      <div className="font-bold text-sm w-1/2 py-0.5 pl-4 -mt-6 -ml-2 text-white bg-gray-700 rounded-full">
        Resume Objective
      </div>
      <div className="mt-1 text-sm">
        <div className="pt-1 mb-2 text-xs">
          {i18nData({
            ja: "私の長期的な目標は、WebApplicationの設計と開発を専門とする 「Chief Service / Software Architect」です。",
            ko: "저의 장기적인 목표는 웹애플리케이션 설계&개발을 주력으로 하는 「Chief Service / Software Architect」입니다.",
            en: "My long-term goal is to become a 「Chief Service/Software Architect」 specializing in web application design and development.",
          })}
          {i18nData({
            ja: "この目標を現実のものとするために、変化し続けるユーザーとビジネスのニーズを満たすWebApplicationを提供することを目指し、技術面での専門性を高めるための機会を求めています。",
            ko: "목표를 현실로 하기 위한 과정으로써, 계속하여 진화하는 사용자와 비즈니스의 요구를 충족하기 위한 웹애플리케이션을 제공하는 것을 목표로 기술 전문성을 높혀 나갈 수 있는 기회를 찾고 있습니다.",
            en: "In order to make this goal to the real, I am finding opportunities to expend my technical expertise by providing web applications that meet the evolving needs of users and businesses. ",
          })}
          {i18nData({
            ja: "WebApplicationのBack-end設計、Full-stack技術、Software分野に対する情熱を基にして、革新的でユーザー中心のウェブサービスの開発に貢献したいと考えています。",
            ko: "웹 애플리케이션의 백엔드 설계 및 풀스텍 기술, 소프트웨어 분야에 대한 관심을 바탕으로 혁신적이고 사용자 중심적인 웹서비스의 개발에 기여하고자 합니다.",
            en: "With passion in backend design of web applications, full-stack technologies, and the software field, I aspire to contribute to the development of innovative and user-centric web services.",
          })}
        </div>
      </div>
    </>
  );
};

export default ResumeObjective;
