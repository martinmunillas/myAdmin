const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return {
        ...state,
        toDos: [action.payload, ...state.toDos],
      };
    case 'COMPLETE_TODO':
      return {
        ...state,
        toDos: state.toDos.filter((todo) => todo._id !== action.payload.id),
      };
    case 'SET_STATE':
      return {
        user: state.user,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
