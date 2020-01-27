// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Table } from '../Table';
// any missing imports can usually be resolved by adding them here
import { IRowData, IExtraData, SortByDirection, IExtraColumnData, IAction, ISeparator, RowWrapperProps } from '..';

describe('Table test', () => {
  it('Table should match snapshot', () => {
    const view = shallow(
      <Table
        aria-label={"string"}
				children={<>ReactNode</>}
				className={"''"}
				variant={null}
				borders={true}
				gridBreakPoint={''}
				sortBy={undefined}
				onCollapse={(
  event: React.MouseEvent,
  rowIndex: number,
  isOpen: boolean,
  rowData: IRowData,
  extraData: IExtraData
) => undefined as void}
				onExpand={(
  event: React.MouseEvent,
  rowIndex: number,
  colIndex: number,
  isOpen: boolean,
  rowData: IRowData,
  extraData: IExtraData
) => undefined as void}
				onSelect={(
  event: React.MouseEvent,
  isSelected: boolean,
  rowIndex: number,
  rowData: IRowData,
  extraData: IExtraData
) => undefined as void}
				canSelectAll={true}
				onSort={(
  event: React.MouseEvent,
  columnIndex: number,
  sortByDirection: SortByDirection,
  extraData: IExtraColumnData
) => undefined as void}
				actions={[]}
				actionResolver={(rowData: IRowData, extraData: IExtraData) => undefined as (IAction | ISeparator)[]}
				areActionsDisabled={(rowData: IRowData, extraData: IExtraData) => undefined as boolean}
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
				rowWrapper={(props: RowWrapperProps) => undefined as JSX.Element}
				role={"'grid'"}
      />);
    expect(view).toMatchSnapshot();
  });
});
