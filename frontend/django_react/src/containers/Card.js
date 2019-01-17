import React from 'react';
import { Card } from 'antd';

const cardComponent =  (props) => (
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title={props.item.title} bordered={false} style={{ width: 300 }}>
      <p>{props.item.content}</p>
    </Card>
  </div>
);
export default cardComponent;
