import React from 'react';

import { map } from 'lodash/collection';

import BlogItem from './Item';

const BlogList = ({ items }) => (
  <div style={style}>
    {
      map(items, (item, key) =>
        <BlogItem item={item} key={key} />
      )
    }
  </div>
);

const style = {
  padding: '50px 100px'
};

export default BlogList;
