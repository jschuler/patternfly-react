// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { BreadcrumbItem } from '../BreadcrumbItem';

describe('BreadcrumbItem test', () => {
  it('BreadcrumbItem should match snapshot', () => {
    const view = mount(
      <BreadcrumbItem
        children={<>ReactNode</>}
				className={"''"}
				to={"null"}
				isActive={false}
				target={"null"}
				component={'a'}
      />);
    expect(view).toMatchSnapshot();
  });
});
