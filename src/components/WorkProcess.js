import React, { useContext } from "react";
// import "./WorkProcess.css";
import { withRouter } from "react-router-dom";
import RoomContext from "../context/RoomContext";

const WorkProcess = ({ history }) => {
  const [Infos, dispatch] = useContext(RoomContext);

  React.useEffect(() => {
    dispatch({
      type: "SET_INFO",
      value: "Channel test for Protection System",
      name: "title",
    });
  }, []);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <div>
        <div>
          <table
            style={{
              margin: "auto",
              width: "100%",
              height: "23rem",
            }}
          >
            <thead>
              <tr>
                <th>No</th>
                <th>작업 종류</th>
                <th>작업 내용</th>
              </tr>
              <tr>
                <td>1</td>
                <td>A</td>
                <td>
                  <input style={{ border: "none", textAlign: "center" }} />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>B</td>
                <td>123</td>
              </tr>
              <tr>
                <td>3</td>
                <td>C</td>
                <td>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>D</td>
                <td>D를 작업</td>
              </tr>
              <tr>
                <td>5</td>
                <td>E</td>
                <td>456</td>
              </tr>
            </thead>
          </table>
          <div style={{ paddingTop: "2em" }}>
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
              작업 저장
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
                        작업을 저장하시겠습니까?
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          history.push("/menu/normal");
                        }}
                      >
                        OK
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default withRouter(WorkProcess);
