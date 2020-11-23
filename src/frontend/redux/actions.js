import axios from 'axios';
import Cookie from 'js-cookie';

const request = async (url, method = 'get', payload = {}) => {
  return await axios({
    method,
    url,
    data: payload,
    headers: {
      Authorization: `Bearer ${Cookie.get('token')}`,
    },
  });
};

export const createProject = (payload) => ({
  type: 'CREATE_PROJECT',
  payload,
});

export const editProject = (payload) => ({
  type: 'EDIT_PROJECT',
  payload,
});

export const deleteProject = (payload) => ({
  type: 'DELETE_PROJECT',
  payload,
});

export const createToDo = (payload) => ({
  type: 'CREATE_TODO',
  payload,
});

export const completeToDo = (payload) => ({
  type: 'COMPLETE_TODO',
  payload,
});

export const setState = (payload) => ({
  type: 'SET_STATE',
  payload,
});

export const deleteMessage = (payload) => ({
  type: 'DELETE_MESSAGE',
  payload,
});

export const readMessage = (payload) => ({
  type: 'READ_MESSAGE',
  payload,
});

export const unreadMessage = (payload) => ({
  type: 'UNREAD_MESSAGE',
  payload,
});

export const getState = () => {
  return async (dispatch) => {
    try {
      const projects = await request(`/api/projects`);

      const messages = await request(`/api/messages`);

      const toDos = await request(`/api/toDos`);

      const state = {
        projects: projects.data.data,
        messages: messages.data.data,
        toDos: toDos.data.data,
      };

      dispatch(setState(state));
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
};

export const deleteMessageRequest = (payload) => {
  return async (dispatch) => {
    try {
      await request(`/api/messages/${payload.id}`, 'delete');
      dispatch(deleteMessage({ id: payload.id }));
    } catch (error) {}
  };
};

export const readMessageRequest = (payload) => {
  return async (dispatch) => {
    try {
      await request(`/api/messages/${payload.id}/read`, 'put');
      dispatch(readMessage(payload));
    } catch (error) {}
  };
};

export const unreadMessageRequest = (payload) => {
  return async (dispatch) => {
    try {
      await request(`/api/messages/${payload.id}/unread`, 'put');
      dispatch(unreadMessage(payload));
    } catch (error) {}
  };
};

export const createProjectRequest = (payload) => {
  return async (dispatch) => {
    try {
      await request('/api/projects', 'post', payload);

      dispatch(createProject(payload));
      dispatch(getState());
    } catch (error) {
      console.log(error);
      // dispatch(setError(error))
    }
  };
};

export const editProjectRequest = (payload, id) => {
  return async (dispatch) => {
    try {
      await request(`/api/projects/${id}`, 'put', payload);

      dispatch(editProject(payload));
    } catch (error) {
      console.log(error);
      // dispatch(setError(error))
    }
  };
};

export const deleteProjectRequest = (payload) => {
  return async (dispatch) => {
    try {
      await request(`/api/projects/${payload.id}`, 'delete');

      dispatch(deleteProject(payload));
    } catch (error) {
      console.log(error);
      // dispatch(setError(error))
    }
  };
};

export const createToDoRequest = (payload) => {
  return async (dispatch) => {
    try {
      await request('/api/toDos', 'post', payload);

      dispatch(createToDo(payload));
      dispatch(getState());
    } catch (error) {
      console.log(error);
      // dispatch(setError(error))
    }
  };
};

export const completeToDoRequest = (payload) => {
  return async (dispatch) => {
    try {
      await request(`/api/toDos/${payload._id}`, 'delete');

      dispatch(completeToDo({ id: payload._id }));
    } catch (error) {
      console.log(error);
      // dispatch(setError(error))
    }
  };
};

export const loginRequest = ({ email, password }, redirectUrl) => {
  return async (dispatch) => {
    try {
      const petition = await axios({
        method: 'POST',
        url: '/api/auth/sign-in',
        auth: {
          username: email,
          password,
        },
      });

      document.cookie = `email=${petition.data.user.email}`;
      document.cookie = `name=${petition.data.user.name}`;
      document.cookie = `id=${petition.data.user.id}`;
      document.cookie = `token=${petition.data.token}`;

      window.location.href = redirectUrl;
    } catch (error) {
      console.log(error);
      // dispatch(setError(error))
    }
  };
};
