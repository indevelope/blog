import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import { Item } from 'semantic-ui-react';

import BlogItem from './Item';

const BlogList = ({ items }) => (
  <Item.Group>
    {
      map(items, (item, key) =>
        <BlogItem item={item} key={key} />
      )
    }
  </Item.Group>
);

BlogList.propTypes = {
  items: PropTypes.array
};

export default BlogList;
