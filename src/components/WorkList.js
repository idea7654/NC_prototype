import React, { useContext } from "react";
import "./NewWork.css";
import { withRouter } from "react-router-dom";
import RoomContext from "../context/RoomContext";

const WorkList = ({ history }) => {
  const [Infos, dispatch] = useContext(RoomContext);

  React.useEffect(() => {
    dispatch({
      type: "SET_INFO",
      value: "수행 작업 목록",
      name: "title",
    });
  }, []);
  return (
    <div>
      <table style={{ margin: "auto", width: "100%" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Document No.</th>
            <th>Title</th>
            <th>Rev.No</th>
            <th>선택</th>
          </tr>
          <tr>
            <td>1</td>
            <td>JR-ROP_SI_014</td>
            <td>Channel test for Protection System</td>
            <td>2</td>
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
          <tr style={{ color: "red" }}>
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
      <div style={{ paddingTop: "5em" }}>
        <button
          style={{
            backgroundColor: "rgb(13, 132, 212)",
            color: "white",
            border: "none",
            padding: "10px 100px",
            fontSize: "15px",
            borderRadius: "5px",
          }}
          onClick={() => {
            history.push("/menu/process");
          }}
        >
          작업 선택
        </button>
      </div>
    </div>
  );
};

export default withRouter(WorkList);
