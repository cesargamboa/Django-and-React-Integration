export default function(state=[], action){
  switch(action.type){
    case "GET_ARTICLES":
      return action.payload;
    default:
      return state;
  }
}
