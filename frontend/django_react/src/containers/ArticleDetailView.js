import React from 'react';
import { connect, } from 'react-redux';
import getArticleDetail from '../actions/detailArticleView';
import CardComponent from './Card';
import Form from '../components/Form';

class ArticleView extends React.Component {
  componentWillMount(){
    this.props.getArticleDetail(this.props.match.params.articleID);
  }
render(){
  console.log(this.props.detailView)
  // console.log(this.props.match.params.articleID);
  return(
     <React.Fragment>
     <CardComponent item={this.props.detailView}/>
     <Form type="update"/>
     </React.Fragment>
    );
}
 
}
const mapStateToProps = (state) => {
  return { 
    detailView: state.detailView,
  };
};
const  mapDispatchToProps = (dispatch)=> ({

    getArticleDetail: (id) => {
      dispatch(getArticleDetail(id));
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
