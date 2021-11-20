import React from "react";
import RoomContext from "../context/RoomContext";

const DailyDetail = () => {
  const [Infos, dispatch] = React.useContext(RoomContext);

  React.useEffect(() => {
    dispatch({
      type: "SET_INFO",
      value: "Channel test for Protection System",
      name: "title",
    });
  }, []);
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
                  {/* <input style={{ border: "none", textAlign: "center" }} /> */}
                  A를 작업
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
        </div>
      </div>
    </div>
  );
};

export default DailyDetail;
