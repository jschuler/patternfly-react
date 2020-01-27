// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { GalleryItem } from '../GalleryItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('GalleryItem test', () => {
  it('GalleryItem should match snapshot', () => {
    const view = shallow(
      <GalleryItem
        children={<>ReactNode</>}
      />);
    expect(view).toMatchSnapshot();
  });
});
