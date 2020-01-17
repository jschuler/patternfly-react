// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '../Alert';

describe('Alert test', () => {
  it('Alert should match snapshot', () => {
    const view = shallow(
      <Alert
        variant={'success'}
				isInline={false}
				title={<div>ReactNode</div>}
				action={null}
				children={''}
				className={"''"}
				aria-label={"`${capitalize(variant)} Alert`"}
				variantLabel={"`${capitalize(variant)} alert:`"}
      />);
    expect(view).toMatchSnapshot();
  });
});
