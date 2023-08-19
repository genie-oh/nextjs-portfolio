import React from "react";
import Link from "next/link";

import HomeContext from "./Context/HomeContext";
import { languageList } from "../datas/languageList";

import { scaleRotate as Menu } from "react-burger-menu";
import ReactCountryFlag from "react-country-flag";
import {
  MdOutlineMonitor,
  MdOutlineStar,
  MdAssignmentInd,
  MdWork,
  MdAutoGraph,
  MdArticle,
  MdContactMail,
} from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
// import i18nData from "../i18n/i18nData";

export const GlobalMenu = () => {
  const homeContext = React.useContext(HomeContext);
  const menuList = [
    { title: "TOP", targetId: "SEC-TOP", icon: MdOutlineMonitor },
    {
      title: "My Sales Point",
      targetId: "SEC-SALESPOINT",
      icon: MdOutlineStar,
    },
    { title: "About me", targetId: "SEC-ABOUTME", icon: MdAssignmentInd },
    { title: "Works", targetId: "SEC-WORKS", icon: MdWork },
    { title: "Careers", targetId: "SEC-CAREERS", icon: MdAutoGraph },
    { title: "Articles", targetId: "SEC-ARTICLES", icon: MdArticle },
    { title: "Contact me", targetId: "SEC-CONTACTME", icon: MdContactMail },
  ];

  return (
    <>
      <div className="bg-black opacity-60 rounded-2xl bm-burger-button-bg"></div>
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <div className="absolute top-0 w-full h-full overflow-y-auto">
          {/* Resume */}
          <div className="mx-8 mt-10">
            <p className="font-bold">Resume</p>
            <Link href="./resume">
              <button className="flex items-center justify-start w-full p-2 my-3 text-black transform bg-gray-300 cursor-pointer rounded-xl menu-item hover:scale-110 hover:bg-white">
                <BiUserCheck fontSize={24} />
                <span className="pl-3">Read Resume/CV</span>
              </button>
            </Link>
          </div>

          {/* Menu */}
          <div className="mx-8 mt-10">
            <p className="font-bold">Menu</p>
            {menuList.map((item, idx) => {
              return (
                <a
                  key={idx}
                  className="flex items-center justify-start w-full p-2 my-3 text-black transform bg-gray-300 cursor-pointer rounded-xl menu-item hover:scale-110 hover:bg-white"
                  onClick={homeContext.HomeContextFunctions.scrollTo.bind(
                    this,
                    item.targetId,
                  )}
                >
                  {item.icon && <item.icon fontSize={24} />}
                  <span className="pl-3">{item.title}</span>
                </a>
              );
            })}
          </div>

          {/* Select Language */}
          <div className="mx-8 mt-10">
            <p className="font-bold">Language</p>
            {languageList.map((item, idx) => {
              return (
                <Link key={idx} href="./" locale={item.locale}>
                  <button className="flex items-center justify-start w-full p-2 my-3 text-black transform bg-gray-300 cursor-pointer rounded-xl menu-item hover:scale-110 hover:bg-white">
                    <ReactCountryFlag
                      className="emojiFlag"
                      countryCode={item.code}
                      style={{ fontSize: "1.5em" }}
                    />
                    <span className="pl-3">{item.title}</span>
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </Menu>
    </>
  );
};
