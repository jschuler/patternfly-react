// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { BackgroundImage } from '../BackgroundImage';
// any missing imports can usually be resolved by adding them here
import { BackgroundImageSrc } from '..';

describe('BackgroundImage test', () => {
  it('BackgroundImage should match snapshot', () => {
    const view = shallow(
      <BackgroundImage
        className={"''"}
				src={BackgroundImageSrc}
      />);
    expect(view).toMatchSnapshot();
  });
});
