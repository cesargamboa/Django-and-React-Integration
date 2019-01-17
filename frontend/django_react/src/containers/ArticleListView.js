import React from 'react';
import Article from '../components/Article';
import FormLayoutDemo from '../components/Form';

class ArticleList extends  React.Component{
  render(){
    return(
      <React.Fragment>
      <Article />
        <h1>Create an Article</h1>
        <FormLayoutDemo type="create"/>
      </React.Fragment>
    )
  }
}
export default ArticleList; 
