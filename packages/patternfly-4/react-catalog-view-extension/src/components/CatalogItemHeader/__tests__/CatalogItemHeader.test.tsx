// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { CatalogItemHeader } from '../CatalogItemHeader';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('CatalogItemHeader test', () => {
  it('CatalogItemHeader should match snapshot', () => {
    const view = shallow(
      <CatalogItemHeader
        className={"''"}
				iconImg={"null"}
				iconClass={"null"}
				title={undefined}
				vendor={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
