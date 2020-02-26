import React from 'react';
import axios from 'axios';
import Blogs from '../components/Blog';

class BlogList extends React.Component {
  state = {
    blogs: []
  };

  fetchBlogs = () => {
    axios.get("http://127.0.0.1:8000/blog/post/").then(res => {
      this.setState({
        blogs: res.data
      });
    });
  }

  componentDidMount() {
    this.fetchBlogs();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchBlogs();
    }
  }

  render() {
    return (
        <Blogs data={this.state.blogs} />
    );
  }
}

export default BlogList;