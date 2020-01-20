// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { DataToolbarFilter } from '../DataToolbarFilter';
import { DataToolbarContext } from '../DataToolbarUtils';

describe('DataToolbarFilter test', () => {
  it('DataToolbarFilter should match snapshot', () => {
    const view = shallow(
      <DataToolbarContext.Provider
        value={{
          updateNumberFilters: () => {}
        }}
      >
        <DataToolbarFilter
          chips={[]}
          deleteChip={undefined}
          children={<div>ReactNode</div>}
          categoryName={"'defaultString'"}
          showToolbarItem={true}
        />
      </DataToolbarContext.Provider>);
    expect(view).toMatchSnapshot();
  });
});
