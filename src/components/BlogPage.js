import React from 'react';

import { items as staticItems } from 'constants/static/items';

import BlogList from 'components/widgets/blog/List';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: staticItems };
  }

  render() {
    const { items } = this.state;

    return (
      <BlogList items={items} />
    );
  }
}

export default BlogPage;
