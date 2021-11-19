import React from "react";

const DailyList = () => {
  return (
    <div>
      <div>
        <table style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>Document No.</th>
              <th>Title</th>
              <th>신청</th>
              <th>승인</th>
              <th>완료</th>
              <th>승인</th>
              <th></th>
            </tr>
            <tr>
              <td rowSpan="2">JR-ROP_SI_014</td>
              <td rowSpan="2">Channel test for Protection System</td>
              <td>홍길동</td>
              <td>왕건</td>
              <td>홍길동</td>
              <td>왕건</td>
              <td rowSpan="2">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="date">2021-01-01</td>
              <td className="date">2021-01-02</td>
              <td className="date">2021-01-15</td>
              <td className="date">2021-01-16</td>
            </tr>
            <tr>
              <td rowSpan="2">JR-ROP_SI_015</td>
              <td rowSpan="2">
                Channel Check for Post-Accident Monitoring System
              </td>
              <td>이몽룡</td>
              <td>왕건</td>
              <td>이몽룡</td>
              <td>왕건</td>
              <td rowSpan="2">
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td className="date">2021-01-01</td>
              <td className="date">2021-01-12</td>
              <td className="date">2021-01-30</td>
              <td className="date">2021-02-01</td>
            </tr>
          </thead>
        </table>
        <div style={{ paddingTop: "100px" }}>
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
            작업일지 저장
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyList;
