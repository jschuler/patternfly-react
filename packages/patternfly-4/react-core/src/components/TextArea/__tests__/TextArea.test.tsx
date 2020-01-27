// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TextArea } from '../TextArea';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('TextArea test', () => {
  it('TextArea should match snapshot', () => {
    const view = shallow(
      <TextArea
        className={"''"}
				isRequired={false}
				isValid={true}
				validated={'default'}
				value={1}
				onChange={(value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => undefined as void}
				resizeOrientation={'both'}
				aria-label={"null"}
      />);
    expect(view).toMatchSnapshot();
  });
});
