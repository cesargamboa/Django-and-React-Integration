export default function(state={}, action){
  switch(action.type){
    case "POST_ARTICLE":
      return action.payload;
    case "UPDATE_ARTICLE":
      return action.payload;
    default:
      return state;
  }
}
