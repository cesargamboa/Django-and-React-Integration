export default function(state=[], action){
  switch(action.type){
    case "USER_SELECTED":
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}
