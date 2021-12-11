import { useState } from "react";

import i18nData from "../../i18n/i18nData";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import dateFormat from "dateformat";
import { GoogleSpreadsheet } from "google-spreadsheet";

const ContactMe = () => {
    //-- send message to google sheet
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY;

    const googleSheetService = new GoogleSpreadsheet(SPREADSHEET_ID);

    const sendToGoogleSheetAsAppendRow = async (rowData) => {
        try {
            await googleSheetService.useServiceAccountAuth({
                client_email: CLIENT_EMAIL,
                private_key: PRIVATE_KEY,
            });
            await googleSheetService.loadInfo();

            const sheet = googleSheetService.sheetsById[SHEET_ID];
            await sheet.addRow(rowData);
        } catch (e) {
            alert("sorry: message sending error occured");
        }
    };

    //-- submit Event Handle
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (ev) => {
        ev.preventDefault();

        const rowData = {
            NAME: ev.target.elements.name.value,
            EMAIL: ev.target.elements.email.value,
            MESSAGE: ev.target.elements.message.value,
            DATE: dateFormat(new Date(), "yyyy-mm-dd hh:mm:ss"),
        };

        //throwable
        sendToGoogleSheetAsAppendRow(rowData);

        //if success
        setFormSubmitted(true);
    };

    return (
        <div className="flex flex-wrap items-center justify-center">
            <div className="flex flex-wrap items-center justify-center w-full h-auto px-10 py-5 lg:w-1/2">
                <div className="flex flex-col justify-center pb-20">
                    <div className="relative sm:max-w-xl sm:mx-auto">
                        <div className="absolute inset-0 transform -skew-y-6 bg-blue-400 shadow-lg md:skew-y-0 md:-rotate-6 md:rounded-3xl"></div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <p className="mt-3">
                                        {i18nData({
                                            ja: "高い理想を掲げ前に進む、サービスのアーキテクチャー設計や開発で、一緒に能力と技術を高める可能性がある機会と出会うことを楽しみにお待ちしております。もし、少しでの興味をお持ちであれば、気軽にご連絡くださいませ！",
                                            ko: "높은 이상을 가지고 달려 나가는 서비스의 아키텍처 설계나 개발에 대해, 함께 능력과 기술을 높힐 가능성이 있는 기회와 만날 수 있는 것을 손꼽아 기대하고 있습니다. 혹시 조금이라도 관심이 있으시다면 부담 없이 연락 주세요!",
                                            en: "i'm interested in all opportunities to deepen with you about service architecture design and development which is especially ambitious. if you just want to say hi or have a question, please contact me.",
                                        })}
                                    </p>
                                    <hr className="mt-3 border-gray-300" />
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <form
                                        className="pt-8 -mb-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
                                        onSubmit={handleSubmit}
                                    >
                                        <label
                                            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                            htmlFor="grid-first-name"
                                        >
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            required
                                            name="name"
                                            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
                                            id="grid-first-name"
                                            type="text"
                                            placeholder="Name"
                                            disabled={formSubmitted}
                                        />

                                        <label
                                            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                            htmlFor="grid-first-name"
                                        >
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            required
                                            name="email"
                                            className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white"
                                            id="grid-first-name"
                                            type="email"
                                            placeholder="Email"
                                            disabled={formSubmitted}
                                        />

                                        <label
                                            className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase"
                                            htmlFor="grid-first-name"
                                        >
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            name="message"
                                            className="w-full px-4 py-3 bg-gray-200 border rounded-md resize-y focus:outline-none"
                                            placeholder="Your message..."
                                            disabled={formSubmitted}
                                        ></textarea>

                                        <div className="flex items-end justify-end">
                                            {!formSubmitted ? (
                                                <button
                                                    type="submit"
                                                    className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-green-500"
                                                    disabled={formSubmitted}
                                                >
                                                    Send
                                                </button>
                                            ) : (
                                                <p className="block w-full p-2 text-sm text-center text-white bg-blue-700 rounded-xl">
                                                    Thanks! your message is accepted.
                                                    <br />
                                                    Please wait for my replying.
                                                </p>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center w-full h-auto px-10 py-5 md:w-1/2">
                <h1 className="w-full mb-20 text-4xl font-bold text-center">Let's have a chat!</h1>
                <div className="m-auto">
                    <ul>
                        <li className="mb-10 font-bold transform hover:scale-125 hover:text-blue-700">
                            <a href="https://www.linkedin.com/in/genie-oh" target="_blank">
                                <FaLinkedin className="inline mr-10 text-6xl icon" />
                                LinkedIn
                            </a>
                        </li>
                        <li className="mb-10 font-bold transform hover:scale-125 hover:text-blue-700">
                            <a href="https://twitter.com/dev_genie_oh" target="_blank">
                                <FaTwitter className="inline mr-10 text-6xl icon" />
                                Twitter
                            </a>
                        </li>
                        <li className="mb-10 font-bold transform hover:scale-125 hover:text-blue-700">
                            <a href="https://github.com/genie-oh" target="_blank">
                                <FaGithub className="inline mr-10 text-6xl icon" />
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
