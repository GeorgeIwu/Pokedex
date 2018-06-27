// import needle from 'needle';

const OPTIONS = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };

export default {
  get: (SUBROUTE, PARAMS, sucessCB, failureCB) => {
    fetch('/api/v2'+SUBROUTE+PARAMS, OPTIONS)
    .then(function(response) {
      console.log('response', response);
      sucessCB(response.data);
    })
    .catch(function(error) {
      console.log('error', error);
      failureCB(error);
    })
  },
};

