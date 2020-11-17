import axios from 'axios';
import Cookie from 'js-cookie';

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

export const getState = () => {
  return async (dispatch) => {
    try {
      const projects = await axios({
        method: 'get',
        url: `/api/projects`,
        headers: {
          Authorization: `Bearer ${Cookie.get('token')}`,
        },
      });

      const messages = await axios({
        method: 'get',
        url: `/api/messages`,
        headers: {
          Authorization: `Bearer ${Cookie.get('token')}`,
        },
      });

      const toDos = await axios({
        method: 'get',
        url: `/api/toDos`,
        headers: {
          Authorization: `Bearer ${Cookie.get('token')}`,
        },
      });
      const state = {
        projects: projects.data.data,
        messages: messages.data.data,
        toDos: toDos.data.data,
      }

      dispatch(
        setState(state)
      );
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
};

export const createToDoRequest = (payload) => {
  return async (dispatch) => {
    try {
      const petition = await axios({
        method: 'POST',
        url: '/api/toDos',
        data: payload,
        headers: {
          Authorization: `Bearer ${Cookie.get('token')}`,
        },
      });

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
      const petition = await axios({
        method: 'DELETE',
        url: `/api/toDos/${payload._id}`,
        headers: {
          Authorization: `Bearer ${Cookie.get('token')}`,
        },
      });

      dispatch(completeToDo({id: payload._id}));
      dispatch(getState());
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
