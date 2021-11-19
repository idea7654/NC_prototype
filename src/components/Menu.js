import React from "react";
import "./Menu.css";
import { withRouter, Route } from "react-router-dom";
import Work_search from "./Work_search";
import NewWork from "./NewWork";
import WorkList from "./WorkList";
import WorkProcess from "./WorkProcess";
import FinishWorkList from "./FinishWorkList";
import DailyList from "./DailyList";

const Menu = ({ history }) => {
  return (
    <div>
      <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        {/* <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500"> */}
        <aside className="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-indigo-500">
          <div className="sidebar-header flex items-center justify-center py-4">
            <div className="inline-flex">
              <a href="#" className="inline-flex flex-row items-center">
                <svg
                  className="w-10 h-10 text-red-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-10 text-gray-100 text-2xl font-bold ml-1 uppercase pr-8">
                  작업관리
                </span>
              </a>
            </div>
          </div>
          <div className="sidebar-content px-4 py-6">
            <ul className="flex flex-col w-full">
              <li className="my-px">
                <span className="flex font-medium text-sm text-gray-300 px-4 my-4 uppercase">
                  Menu
                </span>
              </li>
              <li className="my-px">
                <a
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => {
                    history.push("/menu/normal");
                  }}
                >
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </span>
                  <span className="ml-3">작업 절차서 검색</span>
                </a>
              </li>
              <li className="my-px">
                <a
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => {
                    history.push("/menu/new");
                  }}
                >
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </span>
                  <span className="ml-3">작업 신청</span>
                </a>
              </li>
              <li className="my-px">
                <a
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => {
                    history.push("/menu/list");
                  }}
                >
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </span>
                  <span className="ml-3">작업 수행</span>
                </a>
              </li>
              <li className="my-px">
                <a
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => {
                    history.push("/menu/finish");
                  }}
                >
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </span>
                  <span className="ml-3">작업 완료 목록</span>
                </a>
              </li>
              <li className="my-px">
                <a
                  className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  onClick={() => {
                    history.push("/menu/daily");
                  }}
                >
                  <span className="flex items-center justify-center text-lg text-gray-400">
                    <svg
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </span>
                  <span className="ml-3">작업 일지 확인</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <div className="main-content flex flex-col flex-grow p-4">
            <h1 className="font-bold text-2xl text-gray-700">
              작업 절차서 다운
            </h1>
            <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4">
              <Route path="/menu/normal" render={() => <Work_search />} exact />
              <Route path="/menu/new" render={() => <NewWork />} />
              <Route path="/menu/list" render={() => <WorkList />} />
              <Route path="/menu/process" render={() => <WorkProcess />} />
              <Route path="/menu/finish" render={() => <FinishWorkList />} />
              <Route path="/menu/daily" render={() => <DailyList />} />
            </div>
          </div>
          <footer className="footer px-4 py-6">
            <div className="footer-content">
              <p className="text-sm text-gray-600 text-center">
                © Paichai Univ. 2021. All rights reserved.{" "}
                <a href="https://twitter.com/iaminos">by 오승묵</a>
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default withRouter(Menu);
