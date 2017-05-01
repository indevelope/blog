import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Link from 'components/elements/Link';

import Item from '../Item';

describe('Item', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item />, div);
  });

  describe('render', () => {
    it('should render the title', () => {
      const itemProps = { title: 'Hello, World!', id: 5 };

      const item = shallow(<Item item={itemProps} />);
      const header = <Link to="/posts/5">Hello, World!</Link>;

      expect(item.contains(header)).toEqual(true);
    });

    it('should render usual item', () => {
      const itemProps = {
        title: 'Hello, World!',
        id: 5,
        image: {
          alt: 'Hello, World',
          src: '/images/World.jpg'
        }
      };

      const item = shallow(<Item item={itemProps} />);

      expect(item).toMatchSnapshot();
    })
  });
});
