import React, { useEffect, useContext } from "react";
import { createPopper } from "@popperjs/core";
import { withRouter } from "react-router-dom";
import "./Work_search.css";
import RoomContext from "../context/RoomContext";

const Work_search = ({ history }) => {
  const color = "gray";
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [submit, setSubmit] = React.useState(false);
  const [targetText, setTargetText] = React.useState("작업선택 \n");
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const [showModal, setShowModal] = React.useState(false);
  const [Infos, dispatch] = useContext(RoomContext);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  function setText(text) {
    closeDropdownPopover();
    setTargetText(text);
  }

  useEffect(() => {
    dispatch({
      type: "SET_INFO",
      value: "작업 절차서 검색",
      name: "title",
    });
  }, []);
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");

  return (
    <div>
      <div className="flex justify-center">
        <div
          className="flex flex-wrap"
          style={{ marginTop: "16%", width: "28rem" }}
        >
          <div className="w-full">
            <div className="inline-flex align-middle w-full">
              <button
                className={
                  "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                  bgColor
                }
                type="button"
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ? closeDropdownPopover()
                    : openDropdownPopover();
                }}
                style={{ width: "28rem" }}
              >
                {targetText}
              </button>
              <div
                ref={popoverDropdownRef}
                className={
                  (dropdownPopoverShow ? "block " : "hidden ") +
                  (color === "white" ? "bg-white " : bgColor + " ") +
                  "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                }
                style={{ width: "27.8rem" }}
              >
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={(e) =>
                    setText(
                      "1. JR-ROP_SI_014,Channel test for Reactor Protection System, 2."
                    )
                  }
                >
                  1. JR-ROP_SI_014,Channel test for Reactor Protection System,
                  2.
                </a>
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={(e) =>
                    setText(
                      "2. JR-ROP-SI-015, Channel Check for Post-Accident Monitoring System, 1."
                    )
                  }
                >
                  2. JR-ROP-SI-015, Channel Check for Post-Accident Monitoring
                  System, 1.
                </a>
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                  onClick={(e) =>
                    setText(
                      "3. JR-ROP-SI-016, Channel Test for Post-Accident Monitoring System, 0."
                    )
                  }
                >
                  3. JR-ROP-SI-016, Channel Test for Post-Accident Monitoring
                  System, 0.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "12rem" }}>
        <button
          style={{
            backgroundColor: "rgb(13, 132, 212)",
            color: "white",
            border: "none",
            padding: "10px 100px",
            fontSize: "15px",
            borderRadius: "5px",
          }}
          onClick={() => setShowModal(true)}
        >
          다운로드
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">알림</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    다운로드를 완료했습니다.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    완료
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {Infos.isFirst ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">알림</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setSubmit(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    새롭게 승인된 작업이 있습니다.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      history.push("/menu/list");
                      dispatch({
                        type: "SET_INFO",
                        value: false,
                        name: "isFirst",
                      });
                    }}
                  >
                    완료
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default withRouter(Work_search);
