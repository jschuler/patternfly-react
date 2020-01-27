// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { BodyWrapper } from '../BodyWrapper';
// any missing imports can usually be resolved by adding them here
import { IRowData, IExtraData } from '..';

describe('BodyWrapper test', () => {
  it('BodyWrapper should match snapshot', () => {
    const view = shallow(
      <BodyWrapper
        children={<div>ReactNode</div>}
				mappedRows={[]}
				rows={[]}
				onCollapse={(
  event: React.MouseEvent,
  rowIndex: number,
  isOpen: boolean,
  rowData: IRowData,
  extraData: IExtraData
) => undefined as undefined}
				tbodyRef={() => {}}
				headerRows={[]}
      />);
    expect(view).toMatchSnapshot();
  });
});
