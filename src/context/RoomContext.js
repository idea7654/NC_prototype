import React, { createContext, useReducer } from "react";
import RoomReducer from "../reducer/RoomReducer";

const RoomContext = createContext();

function RoomProvider({ children }) {
  const [Infos, dispatch] = useReducer(RoomReducer, {
    title: "작업 절차서 검색",
    isFirst: true,
    isProcess: false,
    isFinish: false,
  });

  return (
    <RoomContext.Provider value={[Infos, dispatch]}>
      {children}
    </RoomContext.Provider>
  );
}

export { RoomProvider };

export default RoomContext;
