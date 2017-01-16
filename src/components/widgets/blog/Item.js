import React, { PropTypes } from 'react';

import { Image, Item } from 'semantic-ui-react';

import Meta from './elements/Meta';

const BlogItem = ({ item }) => (
  <Item>
    <Image {...item.image} />
    <Item.Content>
      <Item.Header>{item.title}</Item.Header>
      <Meta {...item.meta} />
    </Item.Content>
  </Item>
);

BlogItem.propTypes = {
  item: PropTypes.object
};

export default BlogItem;
