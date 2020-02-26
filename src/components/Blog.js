import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import {Avatar, Icon, List} from "antd";

const BlogIntroCards = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={props.data}
      renderItem={item => (
        <List.Item
          key={item.title}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/blog/${item.id}`}> {item.title} </a>}
            description={item.description}
          />
          {item.body}
        </List.Item>
      )}
    />
  );
};
export default BlogIntroCards;


