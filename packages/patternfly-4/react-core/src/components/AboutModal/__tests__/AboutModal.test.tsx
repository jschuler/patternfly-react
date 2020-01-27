// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModal } from '../AboutModal';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('AboutModal test', () => {
  it('AboutModal should match snapshot', () => {
    const view = shallow(
      <AboutModal
        children={<div>ReactNode</div>}
				className={"''"}
				isOpen={false}
				onClose={(): any => undefined}
				productName={"''"}
				trademark={"''"}
				brandImageSrc={"string"}
				brandImageAlt={"string"}
				backgroundImageSrc={"''"}
				noAboutModalBoxContentContainer={false}
				appendTo={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
