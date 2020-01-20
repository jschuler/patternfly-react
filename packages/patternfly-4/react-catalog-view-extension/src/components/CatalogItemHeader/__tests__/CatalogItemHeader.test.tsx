// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { CatalogItemHeader } from '../CatalogItemHeader';

describe('CatalogItemHeader test', () => {
  it('CatalogItemHeader should match snapshot', () => {
    const view = shallow(
      <CatalogItemHeader
        className={"''"}
				iconImg={"null"}
				iconClass={"null"}
				title={'string'}
				vendor={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
