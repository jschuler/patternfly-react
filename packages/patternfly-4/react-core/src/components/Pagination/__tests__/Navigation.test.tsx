// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Navigation } from '../Navigation';

describe('Navigation test', () => {
  it('Navigation should match snapshot', () => {
    const view = mount(
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
				page={unrecognizedType ReactReactText undefined, consider reporting error to react-jest-test-generator.}
				perPage={undefined}
				onSetPage={unrecognizedType OnSetPage undefined, consider reporting error to react-jest-test-generator.}
				onNextClick={() => undefined as any}
				onPreviousClick={() => undefined as any}
				onFirstClick={() => undefined as any}
				onLastClick={() => undefined as any}
				onPageInput={() => undefined as any}
      />);
    expect(view).toMatchSnapshot();
  });
});
