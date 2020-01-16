// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { PageSection } from '../PageSection';

describe('PageSection test', () => {
  it('PageSection should match snapshot', () => {
    const view = mount(
      <PageSection
        children={undefined}
				className={"''"}
				variant={'default'}
				type={'default'}
				isFilled={undefined}
				noPadding={false}
				noPaddingMobile={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
