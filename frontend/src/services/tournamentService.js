import axios from 'axios';

export const getTournaments = () => {
  return axios
    .get('http://0.0.0.0:5000/api/v1/tournaments')
    .then(res => {
      return res;
    })
    .catch(err => err);
};

export const createTournament = payload => {
  return axios
    .post('http://0.0.0.0:5000/api/v1/tournaments', payload)
    .then(res => {
      return res;
    })
    .catch(err => err);
};

export const editTournament = (payload, id) => {
  return axios
    .put('http://0.0.0.0:5000/api/v1/tournaments/' + id, payload)
    .then(res => {
      return res;
    })
    .catch(err => err);
};

export const deleteTournament = id => {
  return axios
    .delete('http://0.0.0.0:5000/api/v1/tournaments/' + id)
    .then(res => {
      return res;
    })
    .catch(err => err);
};
