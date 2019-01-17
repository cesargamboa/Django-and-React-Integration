import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { List, Avatar, Icon } from 'antd';
import archiveList from '../actions/archiveListActions';
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const listData = [];
class Article extends React.Component {
  componentDidMount(){
    this.props.archiveList();
  }
  componentWillUpdate(nextProps){
    console.log('this artchive', nextProps.listOfArticles);
    nextProps.listOfArticles.map(item => listData.push(item));
  }
render(){
  console.log(this.props.listOfArticles);
  return(
     <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
        console.log(this.props.listOfArticles)
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={<div><b>ant design</b> footer part</div>}
    renderItem={item => (
      <List.Item
        key={item.id}
        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.title} />}
          title={<Link to={`/${item.id}`}>{item.title}</Link>}
          description={item.content}
        />
        {item.content}
      </List.Item>
    )}
  />
  );
}
 
}
function mapStateToProps(state){
  return{
    listOfArticles: state.listOfArticles,
  }
}
function matchDispatchToProp(dispatch){
  return bindActionCreators({
    archiveList: archiveList,
  }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProp)(Article);
