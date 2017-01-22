import React from 'react';

import request from 'superagent';

import BlogList from 'components/widgets/blog/List';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001/',
      {},
      (err, res) => this.setState({ items: res.body })
    );
  }

  render() {
    const { items } = this.state;

    return (
      <BlogList items={items} />
    );
  }
}

export default BlogPage;
