export const getUsers = ({page = 1} = {}) => dispatch => {
  dispatch({type: 'GET_USERS_PENDING'});

  fetch(`https://randomuser.me/api/?page=${page}&results=5`)
      .then(response => response.json())
      .then(data => {
          dispatch({type: 'GET_USERS_FULFILED', payload: data});
      })
      .catch(error => {
          dispatch({
            type: 'GET_USERS_REJECTED',
            payload: error,
        });
      })
};
