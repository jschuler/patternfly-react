// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Pagination } from '../Pagination';

describe('Pagination test', () => {
  it('Pagination should match snapshot', () => {
    const view = mount(
      <Pagination
        children={<>ReactNode</>}
				className={"''"}
				itemCount={42}
				variant={'top'}
				isDisabled={false}
				isCompact={false}
				perPage={string}
				perPageOptions={[
  {
    title: '10',
    value: 10
  },
  {
    title: '20',
    value: 20
  },
  {
    title: '50',
    value: 50
  },
  {
    title: '100',
    value: 100
  }
]}
				defaultToFullPage={false}
				firstPage={1}
				page={0}
				offset={0}
				itemsStart={null}
				itemsEnd={null}
				widgetId={"'pagination-options-menu'"}
				dropDirection={'up'}
				titles={{
  items: '',
  page: '',
  itemsPerPage: 'Items per page',
  perPageSuffix: 'per page',
  toFirstPage: 'Go to first page',
  toPreviousPage: 'Go to previous page',
  toLastPage: 'Go to last page',
  toNextPage: 'Go to next page',
  optionsToggle: 'Items per page',
  currPage: 'Current page',
  paginationTitle: 'Pagination'
}}
				toggleTemplate={string}
				onSetPage={() => undefined}
				onFirstClick={() => undefined}
				onPreviousClick={() => undefined}
				onNextClick={() => undefined}
				onLastClick={() => undefined}
				onPageInput={() => undefined}
				onPerPageSelect={() => undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
