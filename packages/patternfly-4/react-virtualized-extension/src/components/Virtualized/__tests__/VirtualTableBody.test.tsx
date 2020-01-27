// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { VirtualTableBody } from '../VirtualTableBody';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('VirtualTableBody test', () => {
  it('VirtualTableBody should match snapshot', () => {
    const view = shallow(
      <VirtualTableBody
        aria-label={"string"}
				autoHeight={false}
				className={"string"}
				estimatedRowSize={30}
				height={42}
				noRowsRenderer={() => null as any}
				onRowsRendered={() => {}}
				onScroll={() => {}}
				overscanIndicesGetter={undefined}
				overscanRowCount={10}
				rowHeight={undefined}
				rowRenderer={'any'}
				rowCount={42}
				scrollToAlignment={'auto'}
				scrollToIndex={-1}
				scrollTop={42}
				style={undefined}
				tabIndex={42}
				width={42}
				columns={[]}
				columnCount={42}
				rows={[]}
      />);
    expect(view).toMatchSnapshot();
  });
});
