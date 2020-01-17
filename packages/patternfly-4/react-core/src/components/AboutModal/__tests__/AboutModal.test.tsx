// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { AboutModal } from '../AboutModal';

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
				brandImageSrc={"'defaultString'"}
				brandImageAlt={"'defaultString'"}
				backgroundImageSrc={"''"}
				noAboutModalBoxContentContainer={false}
				appendTo={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
