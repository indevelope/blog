import React, { PropTypes } from 'react';

import Helmet from 'react-helmet';

import { Item } from 'semantic-ui-react';

import BlogItem from 'components/widgets/blog/Item';

const Post = ({ item }) => (
  <div>
    <Item.Group>
      {item && <BlogItem item={item} />}
    </Item.Group>
    {item && <Helmet title={item.title} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object
};

export default Post;
