import React from "react";
import { createPopper } from "@popperjs/core";
import { withRouter } from "react-router-dom";
import "./Work_search.css";

const Work_search = ({ history }) => {
  const color = "gray";
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const [targetText, setTargetText] = React.useState("작업선택 \n");
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
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
        >
          다운로드
        </button>
      </div>
    </div>
  );
};

export default withRouter(Work_search);
