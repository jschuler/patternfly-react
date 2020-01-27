// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { AccordionToggle } from '../AccordionToggle';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('AccordionToggle test', () => {
  it('AccordionToggle should match snapshot', () => {
    const view = shallow(
      <AccordionToggle
        children={<>ReactNode</>}
				className={"''"}
				isExpanded={false}
				id={"string"}
				component={() => <div />}
      />);
    expect(view).toMatchSnapshot();
  });
});
