function RoomReducer(state, action) {
  switch (action.type) {
    case "SET_INFO":
      return { ...state, ...{ [action.name]: action.value } };
    default:
      return state;
  }
}

export default RoomReducer;
