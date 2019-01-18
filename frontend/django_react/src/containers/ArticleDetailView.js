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
  return(
     <React.Fragment>
     <CardComponent item={this.props.formReducer.lenght? this.props.formReducer : this.props.detailView}/>
     <Form type="update" articleID={this.props.match.params.articleID} />
     </React.Fragment>
    );
}
 
}
const mapStateToProps = (state) => {
  return { 
    detailView: state.detailView,
    formReducer: state.formReducer,
  };
};
const  mapDispatchToProps = (dispatch)=> ({

    getArticleDetail: (id) => {
      dispatch(getArticleDetail(id));
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(ArticleView);
