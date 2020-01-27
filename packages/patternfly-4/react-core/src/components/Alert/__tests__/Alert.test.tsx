// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '../Alert';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

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
				aria-label={"string"}
				variantLabel={"string"}
				isToast={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
