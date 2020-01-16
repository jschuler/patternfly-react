// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Alert } from '../Alert';

describe('Alert test', () => {
  it('Alert should match snapshot', () => {
    const view = mount(
      <Alert
        variant={'success'}
				isInline={false}
				title={<>ReactNode</>}
				action={null}
				children={''}
				className={"''"}
				aria-label={"`${capitalize(variant)} Alert`"}
				variantLabel={"`${capitalize(variant)} alert:`"}
      />);
    expect(view).toMatchSnapshot();
  });
});
