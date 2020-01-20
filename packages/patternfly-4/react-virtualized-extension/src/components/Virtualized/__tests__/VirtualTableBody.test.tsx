// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import VirtualTableBody from '../VirtualTableBody';

describe('VirtualTableBody test', () => {
  it('VirtualTableBody should match snapshot', () => {
    const view = shallow(
      <VirtualTableBody
        aria-label={undefined}
				autoHeight={false}
				className={undefined}
				estimatedRowSize={30}
				height={42}
				noRowsRenderer={() => null as any}
				onRowsRendered={() => {}}
				onScroll={() => {}}
				overscanRowCount={10}
				rowHeight={1/*unrecognizedType CellSize undefined*/}
				rowRenderer={'any'}
				rowCount={42}
				scrollToAlignment={'auto'}
				scrollToIndex={-1}
				scrollTop={undefined}
				style={{}}
				tabIndex={undefined}
				width={42}
				columns={undefined}
				columnCount={undefined}
				rows={[]}
      />);
    expect(view).toMatchSnapshot();
  });
});
