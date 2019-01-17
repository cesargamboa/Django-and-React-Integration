import React from 'react';
import { connect, } from 'react-redux';
import getArticleDetail from '../actions/detailArticleView';
import CardComponent from './Card';

class ArticleView extends React.Component {
  componentWillMount(){
    this.props.getArticleDetail(this.props.match.params.articleID);
  }
render(){
  console.log(this.props.detailView)
  // console.log(this.props.match.params.articleID);
  return(
     <CardComponent item={this.props.detailView}/>
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
