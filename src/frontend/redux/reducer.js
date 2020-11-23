const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };
    case 'EDIT_PROJECT':
      return {
        ...state,
        projects: state.projects.map(project => project._id == action.payload._id ? action.payload : project),
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((project) => action.payload.id !== project._id),
      };
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

    case 'READ_MESSAGE':
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message._id == action.payload.id) {
            return { ...message, isRead: true };
          }
          return message;
        }),
      };

    case 'UNREAD_MESSAGE':
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message._id == action.payload.id) {
            return { ...message, isRead: false };
          }
          return message;
        }),
      };

    case 'DELETE_MESSAGE':
      return {
        ...state,
        messages: state.messages.filter((message) => message._id !== action.payload.id),
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
