export const selectUser = (user) => {
  console.log("You click on user: ", user.first);
  return {
    // type 
    type: "USER_SELECTED",
    // payload
    payload: user,
  }
} 
