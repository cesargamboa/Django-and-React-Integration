import axios from 'axios';

function archiveList() {
  let url = 'http://127.0.0.1:8000/api/';

  return function (dispatch) { 
    console.log('got hre');
    axios.get(url)
      .then((response) => dispatch({
        type: "GET_ARTICLES",
        payload: response.data
      })).catch((response) => dispatch({
        type: "GET_ARTICLES",
        payload: "Error with the request",
        error: response
      }))
  }
}
export default archiveList;
