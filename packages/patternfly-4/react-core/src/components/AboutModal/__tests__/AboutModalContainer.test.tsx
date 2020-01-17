// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModalContainer } from '../AboutModalContainer';

describe('AboutModalContainer test', () => {
  it('AboutModalContainer should match snapshot', () => {
    const view = shallow(
      <AboutModalContainer
        children={<div>ReactNode</div>}
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
