// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { AboutModalContainer } from '../AboutModalContainer';

describe('AboutModalContainer test', () => {
  it('AboutModalContainer should match snapshot', () => {
    const view = mount(
      <AboutModalContainer
        children={<>ReactNode</>}
				className={"''"}
				isOpen={false}
				onClose={() => undefined}
				productName={"''"}
				trademark={undefined}
				brandImageSrc={"'defaultString'"}
				brandImageAlt={"'defaultString'"}
				backgroundImageSrc={undefined}
				ariaLabelledbyId={"'defaultString'"}
				ariaDescribedById={"'defaultString'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
