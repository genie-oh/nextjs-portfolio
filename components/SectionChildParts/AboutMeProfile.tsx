import Image from "next/image";
import i18nData from "../../i18n/i18nData";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { variantsRevealFromBotoom } from "../../motions/variantsRevealFromBottom";

import { GiJapan, GiSouthKorea } from "react-icons/gi";

const AboutMeProfile = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("animate");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            variants={variantsRevealFromBotoom}
            initial="initial"
            animate={controls}
            className="relative px-5 py-5 m-5 bg-white shadow-2xl md:m-10 md:px-14 rounded-xl"
        >
            <div className="-mt-24 md:-mt-32 ">
                <div className="flex items-center justify-center mx-auto overflow-hidden bg-white border-4 border-gray-200 h-36 w-52 md:w-64 md:h-48 md:border-8 rounded-2xl">
                    <Image src="/img/about_me/mypic.jpg" width={250} height={250} layout="fixed" />
                </div>
            </div>

            <div className="">
                <div className="px-2">
                    <p className="inline-block pt-8 mb-5 text-4xl font-bold">
                        Hello! My name is <span className="text-indigo-700">Genie, OH</span>
                    </p>
                    <p className="mb-1 text-xl text-yellow-500 ">Senior back-end engineer</p>
                    <p className="mb-5 text-xl text-yellow-500 ">Middle web service architect / full-stack engineer</p>
                </div>
                <div className="p-5 mb-5 bg-gray-100 rounded-2xl">
                    <p className="mb-2">
                        {i18nData({
                            ja: "ウェブ・エンジニアとして、2013年から、決済代行サービスとアフィリエイトポイントサービスの分野に勤めております。",
                            ko: "웹개발자로써, 2013년부터 결제 대행 서비스와 어필리에이트 포인트 서비스 분야에 종사하고 있습니다.",
                            en: "As Web Engineer, Having an experiance since 2013 in the field like Payment Gateway Service,Point Income User Service.",
                        })}
                    </p>
                    <p className="mb-2">
                        {i18nData({
                            ja: "私は、幼い頃から、パソコンでできる事なら、何事での興味がありました。",
                            ko: "저는 어렸을 시절부터 컴퓨터로 하는 것이라면 무엇이든 흥미가 있었습니다.",
                            en: "I have loved all things of working on a computer from young.",
                        })}
                    </p>
                    <p className="mb-2">
                        {i18nData({
                            ja: "現在に至っては、ウェブサービスとソフトウェアの設計を専門とするアーキテクトに強い興味を持っております。その故、近い未来にはサービス・アーキテクトになることを第一目標としております。",
                            ko: "지금은 웹서비스와 소프트웨어를 설계하는 아키텍트에 큰 흥미를 느끼고 있습니다. 그래서 가까운 미래에 서비스 아키텍트가 되는 것을 최우선목표로 하고 있습니다.",
                            en: "In now, i feel a strong urge to the Architect which designs Web Service System and Software .and so, that is my firstordered goal to earlier future.",
                        })}
                    </p>
                    <p className="mb-2">
                        {i18nData({
                            ja: "ウェブサービスのアーキテクトとしてより高みへと成長するため、さまざまなサービスのアーキテクチャー設計と開発の機械と出会うことを楽しみにしております。",
                            ko: "웹서비스 아키텍트로 성장하기 위해 다양한 서비스의 아키텍처 설계와 개발 경험을 얻을 수 있는 기회와 만나는 것을 기대하고 있습니다.",
                            en: "I hope to meet more chances to design servcie architecture and develop software to grow up to web service architect.",
                        })}
                    </p>
                </div>

                <div className="p-2 mb-5 border-t-2">
                    <div className="mb-3 text-lg font-bold">Languages level for communications</div>
                    <ul className="mx-5 my-1 list-disc">
                        {i18nData({
                            ja: (
                                <>
                                    <li>
                                        <span className="font-bold">日本語</span>は、
                                        中・上級ビジネスレベルとして駆使できます。
                                    </li>
                                    <li>
                                        <span className="font-bold">英語</span>は、書き読みをある程度,
                                        ヒアリング・スピーキングは、ほんの少し可能です。
                                    </li>
                                    <li>
                                        <span className="font-bold">韓国語</span>は、母国語です。
                                    </li>
                                </>
                            ),
                            ko: (
                                <>
                                    <li>
                                        <span className="font-bold">일본어</span>는 중상급 비지니스 수준입니다.
                                    </li>
                                    <li>
                                        <span className="font-bold">영어</span>는 읽고 쓰기를 어느 정도. 말하기 듣기는
                                        아주 약간 가능합니다.
                                    </li>
                                    <li>
                                        <span className="font-bold">한국어</span>는 모국어입니다.
                                    </li>
                                </>
                            ),
                            en: (
                                <>
                                    <li>
                                        <span className="font-bold">JAPANESE</span> is Better Business Level.
                                    </li>
                                    <li>
                                        <span className="font-bold">ENGLISH</span> is Some reading, writing. a little
                                        bit speaking, hearing.
                                    </li>
                                    <li>
                                        <span className="font-bold">KOREAN</span> is Native.
                                    </li>
                                </>
                            ),
                        })}
                    </ul>
                </div>

                <div className="flex flex-wrap items-start justify-between p-2 border-t-2">
                    <div className="flex items-center justify-start mb-2">
                        <span className="text-4xl text-green-600">
                            <GiJapan />
                        </span>
                        <span>
                            {i18nData({
                                ja: (
                                    <>
                                        <span className="font-bold">日本、東京</span>に現在住んでおります。
                                    </>
                                ),
                                ko: (
                                    <>
                                        <span className="font-bold">일본, 도쿄</span>에 현재 거주하고 있습니다.
                                    </>
                                ),
                                en: (
                                    <>
                                        <span className="font-bold">Japan, Tokyo</span>, i live in now.
                                    </>
                                ),
                            })}
                        </span>
                    </div>
                    <div className="flex items-center justify-start">
                        <span className="text-4xl text-blue-600">
                            <GiSouthKorea />
                        </span>
                        <span>
                            {i18nData({
                                ja: (
                                    <>
                                        <span className="font-bold">韓国</span>が私の本国籍です。
                                    </>
                                ),
                                ko: (
                                    <>
                                        <span className="font-bold">한국</span>이 저의 본 국적입니다.
                                    </>
                                ),
                                en: (
                                    <>
                                        <span className="font-bold">South Korea</span>, my country is.
                                    </>
                                ),
                            })}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutMeProfile;
