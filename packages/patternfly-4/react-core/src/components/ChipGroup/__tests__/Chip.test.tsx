// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Chip } from '../Chip';

describe('Chip test', () => {
  it('Chip should match snapshot', () => {
    const view = mount(
      <Chip
        children={undefined}
				closeBtnAriaLabel={"'close'"}
				className={"''"}
				isOverflowChip={false}
				isReadOnly={false}
				onClick={(_e: React.MouseEvent) => undefined as any}
				component={'div'}
				tooltipPosition={'top'}
      />);
    expect(view).toMatchSnapshot();
  });
});
