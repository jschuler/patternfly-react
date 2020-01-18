// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { PaginationOptionsMenu } from '../PaginationOptionsMenu';
import { ToggleTemplateProps } from '../ToggleTemplate';

describe('PaginationOptionsMenu test', () => {
  it('PaginationOptionsMenu should match snapshot', () => {
    const view = shallow(
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
