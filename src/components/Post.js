import React, { PropTypes } from 'react';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/Item';

const Post = ({ item }) => (
  <Item.Group>
    {item && <BlogItem item={item} />}
  </Item.Group>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
