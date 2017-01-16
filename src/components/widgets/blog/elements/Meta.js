import React from 'react';

import { Item, Icon } from 'semantic-ui-react';

import { formatDate } from 'helpers/date';

const Meta = ({ createdAt, updatedAt, author, likes }) => (
  <Item.Meta>
    <span><Icon name='calendar outline' /> создано: { formatDate(createdAt) }</span>
    <span><Icon name='history' /> обновлено: { formatDate(updatedAt) }</span>
    <span><Icon name='user' /> автор: { author }</span>
    <span><Icon name='empty heart' /> понравилось: { likes }</span>
  </Item.Meta>
);

export default Meta;
