import React, {Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { selectUser } from '../actions/userActions';

class UserList extends Component{
  render(){
    return(
      <ul>
          {this.props.users.map(user => (
            <li 
            key={user.id}
            onClick={() => this.props.selectUser(user)}>
              {user.first}
              </li>))}
      </ul>
    );
  }
}
function mapStateToProps(state){
  return{
    users: state.users, // takes the store selected as renders it as a prop
  }
}
function matchDispatchToProp(dispatch){
  return bindActionCreators({
    selectUser: selectUser,
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProp)(UserList);
