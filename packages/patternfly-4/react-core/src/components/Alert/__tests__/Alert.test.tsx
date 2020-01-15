
// Auto-generated do not edit


/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import * as React from 'react';
import { mount } from 'enzyme';
import { Alert } from '../Alert';


describe('Alert test', () => {
  it('Alert should match snapshot', () => {
    const view = mount(
      <Alert
        variant={'success'}
				isInline={false}
				title={'defaultString'}
				action={null}
				children={''}
				className={"''"}
				aria-label={"`${capitalize(variant)} Alert`"}
				variantLabel={"`${capitalize(variant)} alert:`"}
      />);
    expect(view).toMatchSnapshot();
  });
});
