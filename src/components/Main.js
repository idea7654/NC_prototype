import React from "react";
import "./Main.css";
import { withRouter } from "react-router-dom";

const Main = ({ history }) => {
  function ButtonClick(e) {
    history.push("/menu/normal");
  }

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
        <form className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md w-screen h-screen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/3 h-1/3 text-gray-600 mb-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            />
          </svg>
          <p className="mb-5 text-6xl uppercase text-gray-600">작업관리</p>
          <input
            type="email"
            name="email"
            className="mb-5 p-3 w-1/2 focus:border-purple-700 rounded border-2 outline-none"
            autoComplete="off"
            placeholder="Username"
            required
          />
          <input
            type="password"
            name="password"
            className="mb-5 p-3 w-1/2 focus:border-purple-700 rounded border-2 outline-none"
            autoComplete="off"
            placeholder="Password"
            required
          />
          <button
            className="bg-purple-600 hover:bg-purple-900 text-white font-bold p-2 rounded w-1/2"
            id="login"
            onClick={ButtonClick}
          >
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Main);
