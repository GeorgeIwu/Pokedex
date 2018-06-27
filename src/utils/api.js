import axios from 'axios';

export default {
  get: (SUBROUTE, PARAMS, sucessCB, failureCB) => {
    axios.get('/api/v2'+SUBROUTE+PARAMS)
    .then(function (response) {
      console.log('response', response.data);
      sucessCB(response.data);
    })
    .catch(function (error) {
      console.log('error', error);
      failureCB(error);
    });  
  },
};

