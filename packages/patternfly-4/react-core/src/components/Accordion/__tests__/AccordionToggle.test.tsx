// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { AccordionToggle } from '../AccordionToggle';

describe('AccordionToggle test', () => {
  it('AccordionToggle should match snapshot', () => {
    const view = mount(
      <AccordionToggle
        children={<>ReactNode</>}
				className={"''"}
				isExpanded={false}
				id={"'defaultString'"}
				component={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
