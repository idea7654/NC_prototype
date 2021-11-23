import React from "react";
import { withRouter } from "react-router-dom";
import RoomContext from "../context/RoomContext";

const FinishWorkList = ({ history }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [Infos, dispatch] = React.useContext(RoomContext);

  React.useEffect(() => {
    dispatch({
      type: "SET_INFO",
      value: "작업중인 절차서 목록",
      name: "title",
    });
  }, []);
  return (
    <div>
      <div>
        <table
          style={{
            margin: "auto",
            width: "100%",
          }}
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Document No.</th>
              <th>Title</th>
              <th>Rev.No</th>
              <th>선택</th>
            </tr>
            <tr
              style={
                Infos.isFinish
                  ? { backgroundColor: "lightblue" }
                  : { backgroundColor: "white" }
              }
            >
              <td>1</td>
              <td>JR-ROP_SI_014</td>
              <td>Channel test for Protection System</td>
              <td>{Infos.isFinish ? "작업완료" : "2"}</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>JR-ROP_SI_015</td>
              <td>Channel Check for Post-Accident Monitoring System</td>
              <td>1</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>JR-ROP_SI_016</td>
              <td>Channel Test for Post-Accident Monitoring System</td>
              <td>0</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>JR-ROP_SI_017</td>
              <td>Function Test for Radiation Monitoring System</td>
              <td>1</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>JR-ROP_SI_018</td>
              <td>Inspection for Fire Protection System</td>
              <td>1</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>JR-ROP_SI_019</td>
              <td>function test for Automatic Seismic Trip System</td>
              <td>0</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </thead>
        </table>
        <div style={{ paddingTop: "6em" }}>
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
            작업 등록
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
                      작업절차서를 등록하시겠습니까?
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
                        history.push("/menu/finish");
                        dispatch({
                          type: "SET_INFO",
                          value: true,
                          name: "isFinish",
                        });
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
  );
};

export default withRouter(FinishWorkList);
