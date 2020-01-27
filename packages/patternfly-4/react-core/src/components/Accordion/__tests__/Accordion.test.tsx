// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Accordion } from '../Accordion';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Accordion test', () => {
  it('Accordion should match snapshot', () => {
    const view = shallow(
      <Accordion
        children={<>ReactNode</>}
				className={"''"}
				aria-label={"''"}
				headingLevel={'h3'}
				asDefinitionList={true}
				noBoxShadow={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
