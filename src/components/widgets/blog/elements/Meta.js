import React from 'react';

import { formatDate } from 'helpers/date';

const Meta = ({ createdAt, updatedAt, author, likes }) => (
  <ul>
    <li>создано: { formatDate(createdAt) }</li>
    <li>обновлено: { formatDate(updatedAt) }</li>
    <li>автор: { author }</li>
    <li>понравилось: { likes }</li>
  </ul>
);

export default Meta;
