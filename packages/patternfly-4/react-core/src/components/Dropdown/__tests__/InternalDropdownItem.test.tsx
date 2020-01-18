// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { InternalDropdownItem } from '../InternalDropdownItem';

describe('InternalDropdownItem test', () => {
  it('InternalDropdownItem should match snapshot', () => {
    const view = shallow(
      <InternalDropdownItem
        children={undefined}
				className={"''"}
				listItemClassName={undefined}
				component={'a'}
				variant={'item'}
				role={"'none'"}
				isDisabled={false}
				isHovered={false}
				href={"''"}
				tooltip={undefined}
				tooltipProps={{}}
				index={-1}
				context={{
  keyHandler: () => {},
  sendRef: () => {}
}}
				onClick={(event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent) => undefined as any}
				id={"''"}
				componentID={"''"}
				additionalChild={undefined}
				customChild={undefined}
				enterTriggersArrowDown={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
