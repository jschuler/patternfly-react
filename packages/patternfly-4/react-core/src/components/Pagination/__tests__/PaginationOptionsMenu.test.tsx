// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { PaginationOptionsMenu } from '../PaginationOptionsMenu';

describe('PaginationOptionsMenu test', () => {
  it('PaginationOptionsMenu should match snapshot', () => {
    const view = mount(
      <PaginationOptionsMenu
        className={"''"}
				widgetId={"''"}
				isDisabled={false}
				dropDirection={'up'}
				perPageOptions={[]}
				itemsPerPageTitle={"'Items per page'"}
				page={undefined}
				perPageSuffix={"'per page'"}
				itemsTitle={"'items'"}
				optionsToggle={"'Select'"}
				itemCount={0}
				firstIndex={0}
				lastIndex={0}
				defaultToFullPage={false}
				perPage={0}
				lastPage={undefined}
				toggleTemplate={({ firstIndex, lastIndex, itemCount, itemsTitle }: ToggleTemplateProps) => (
  <React.Fragment>
    <b>
      {firstIndex} - {lastIndex}
    </b>{' '}
    of<b>{itemCount}</b> {itemsTitle}
  </React.Fragment>
)}
				onPerPageSelect={() => null as any}
      />);
    expect(view).toMatchSnapshot();
  });
});
