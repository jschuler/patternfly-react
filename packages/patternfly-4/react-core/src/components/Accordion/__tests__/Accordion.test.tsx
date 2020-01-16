// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Accordion } from '../Accordion';

describe('Accordion test', () => {
  it('Accordion should match snapshot', () => {
    const view = mount(
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
