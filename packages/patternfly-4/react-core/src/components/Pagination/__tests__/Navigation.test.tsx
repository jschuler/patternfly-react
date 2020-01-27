// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from '../Navigation';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('Navigation test', () => {
  it('Navigation should match snapshot', () => {
    const view = shallow(
      <Navigation
        className={"''"}
				isDisabled={false}
				isCompact={false}
				lastPage={0}
				firstPage={0}
				pagesTitle={"''"}
				toLastPage={"'Go to last page'"}
				toPreviousPage={"'Go to previous page'"}
				toNextPage={"'Go to next page'"}
				toFirstPage={"'Go to first page'"}
				currPage={"'Current page'"}
				paginationTitle={"'Pagination'"}
				page={42}
				perPage={42}
				onSetPage={undefined}
				onNextClick={() => undefined as any}
				onPreviousClick={() => undefined as any}
				onFirstClick={() => undefined as any}
				onLastClick={() => undefined as any}
				onPageInput={() => undefined as any}
      />);
    expect(view).toMatchSnapshot();
  });
});
