import React from 'react';
import { connect, } from 'react-redux';
import { createArticle, updateArticle } from '../actions/formActions';
import {
  Form, Input, Button,
} from 'antd';

class FormLayoutDemo extends React.Component {
  submit = (event) => {
    event.preventDefault();
      const title =  event.target.elements.title.value;
      const content =  event.target.elements.content.value;
      const data = {
        title,
        content
      }
      if(this.props.type === "create"){
        this.props.createArticle(data);
      }
      if(this.props.type === "update"){
        this.props.updateArticle(this.props.articleID, data);
      }
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.submit}>
          <Form.Item
            label="Articles"
          >
          </Form.Item>
          <Form.Item
            label="Title"
          >
            <Input placeholder="Enter title here" name="title"/>
          </Form.Item>
          <Form.Item
            label="Content"
          >
            <Input placeholder="Enter Content"  name = "content"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { 
    formReducer: state.formReducer,
  };
};
const  mapDispatchToProps = (dispatch)=> ({

  createArticle: (data) => {
      dispatch(createArticle(data));
    },
  updateArticle: (id, data) => {
      dispatch(updateArticle(id, data));
    },
})
export default connect(mapStateToProps, mapDispatchToProps)(FormLayoutDemo);

