// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PageSection } from '../PageSection';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('PageSection test', () => {
  it('PageSection should match snapshot', () => {
    const view = shallow(
      <PageSection
        children={<div>ReactNode</div>}
				className={"''"}
				variant={'default'}
				type={'default'}
				isFilled={true}
				noPadding={false}
				noPaddingMobile={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
