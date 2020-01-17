// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { FormHelperText } from '../FormHelperText';

describe('FormHelperText test', () => {
  it('FormHelperText should match snapshot', () => {
    const view = shallow(
      <FormHelperText
        children={<>ReactNode</>}
				isError={false}
				isHidden={true}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
