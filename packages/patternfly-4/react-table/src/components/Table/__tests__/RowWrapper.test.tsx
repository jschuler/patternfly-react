// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { RowWrapper } from '../RowWrapper';

describe('RowWrapper test', () => {
  it('RowWrapper should match snapshot', () => {
    const view = shallow(
      <RowWrapper
        trRef={undefined}
				className={"''"}
				onScroll={undefined}
				onResize={undefined}
				row={{
  isOpen: undefined as boolean,
  isExpanded: undefined as boolean,
  isHeightAuto: undefined as boolean
}}
				rowProps={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
