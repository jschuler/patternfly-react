// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { TextArea } from '../TextArea';

describe('TextArea test', () => {
  it('TextArea should match snapshot', () => {
    const view = shallow(
      <TextArea
        className={"''"}
				isRequired={false}
				isValid={true}
				validated={'default'}
				value={undefined}
				onChange={undefined}
				resizeOrientation={'both'}
				aria-label={"null"}
      />);
    expect(view).toMatchSnapshot();
  });
});
