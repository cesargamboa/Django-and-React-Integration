import { combineReducers } from 'redux';

import userReducer from './userReducer';
import activeUser from './reducers/reducerActiveUser';
import ListOfArticles from './reducers/archiveList';
import detailView from './reducers/detailView';


const rootReducer = combineReducers({
  users: userReducer,
  activeUser: activeUser,
  listOfArticles: ListOfArticles,
  detailView: detailView,
});
export default rootReducer;
