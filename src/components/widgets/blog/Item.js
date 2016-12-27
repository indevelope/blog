import React from 'react';

import TextBox  from './elements/TextBox';
import Like     from './elements/Like';
import Meta     from './elements/Meta';
import Image    from './elements/Image';

const BlogItem = ({item}) => (
  <div style={style}>
    <Image {...item.image} />
    <TextBox>{item.title}</TextBox>
    <Meta { ...item.meta } />
  </div>
);

const style = {
  padding: '20px 10px',
  marginBottom: '50px',
  border: '1px solid #666'
};

export default BlogItem;
