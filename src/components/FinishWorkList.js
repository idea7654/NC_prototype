import React from "react";

const FinishWorkList = () => {
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
          >
            작업 등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinishWorkList;
