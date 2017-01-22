import React, { PropTypes } from 'react';

import { Image, Item } from 'semantic-ui-react';

import Meta from './elements/Meta';
import Link from 'components/elements/Link';

import { postsPath } from 'helpers/routes';

const BlogItem = ({ item }) => (
  <Item>
    <Image {...item.image} />
    <Item.Content>
      <Item.Header>
        <Link to={postsPath(item.id)}>{item.title}</Link>
      </Item.Header>
      <Meta {...item.meta} />
    </Item.Content>
  </Item>
);

BlogItem.propTypes = {
  item: PropTypes.object
};

export default BlogItem;
