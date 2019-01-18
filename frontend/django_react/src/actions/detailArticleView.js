import axios from "axios";

const  getArticleDetail =  (id) => {
  let url = `http://127.0.0.1:8000/api/${id}`;
  return function (dispatch){
    axios
      .get(url)
      .then(response =>{
        return dispatch({
          type: "GET_DETAIL_ARTICLE",
          payload: response.data
        })
      }
      )
      .catch(response =>{
        return  dispatch({
          type: "GET_DETAIL_ARTICLE",
          payload: "Error getting the detail view",
          error: response
        })
      }
       
      );
  }
}
export default getArticleDetail;
