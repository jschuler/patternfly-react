// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../Table';

describe('Table test', () => {
  it('Table should match snapshot', () => {
    const view = shallow(
      <Table
        aria-label={"'defaultString'"}
				children={<>ReactNode</>}
				className={"''"}
				variant={null}
				borders={true}
				gridBreakPoint={''}
				sortBy={undefined}
				onCollapse={undefined}
				onExpand={undefined}
				onSelect={undefined}
				canSelectAll={true}
				onSort={undefined}
				actions={undefined}
				actionResolver={undefined}
				areActionsDisabled={undefined}
				header={<div>ReactNode</div>}
				caption={<div>ReactNode</div>}
				rowLabeledBy={"'simple-node'"}
				expandId={"'expandable-toggle'"}
				contentId={"'expanded-content'"}
				dropdownPosition={'right'}
				dropdownDirection={'up'}
				rows={[]}
				cells={[]}
				bodyWrapper={undefined}
				rowWrapper={undefined}
				role={"'grid'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
