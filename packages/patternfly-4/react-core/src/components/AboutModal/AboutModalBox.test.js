import AboutModalBox from './AboutModalBox';
import React from 'react';
import { shallow } from 'enzyme';

test('AboutModalBox Test', () => {
  const view = shallow(
    <AboutModalBox ariaLablledbyId="id" ariaDescribedById="id2">
      This is a AboutModalBox
    </AboutModalBox>
  );
  expect(view).toMatchSnapshot();
});
