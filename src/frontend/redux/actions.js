import axios from 'axios';

export const loginRequest = (payload) => ({
  type: 'LOGIN',
  payload,
});

export const login = ({ email, password }, redirectUrl) => {
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
