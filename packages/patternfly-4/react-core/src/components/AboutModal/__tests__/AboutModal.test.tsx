// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { AboutModal } from '../AboutModal';

describe('AboutModal test', () => {
  it('AboutModal should match snapshot', () => {
    const view = mount(
      <AboutModal
        children={<>ReactNode</>}
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
