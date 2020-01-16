// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Select } from '../Select';

describe('Select test', () => {
  it('Select should match snapshot', () => {
    const view = mount(
      <Select
        children={[]}
				className={"''"}
				direction={'up'}
				isExpanded={false}
				isGrouped={false}
				isPlain={false}
				isDisabled={false}
				isCreatable={false}
				createText={"'Create'"}
				placeholderText={''}
				noResultsFoundText={"'No results found'"}
				selections={''}
				toggleId={"null"}
				aria-label={"''"}
				ariaLabelledBy={"''"}
				ariaLabelTypeAhead={"''"}
				ariaLabelClear={"'Clear all'"}
				ariaLabelToggle={"'Options menu'"}
				ariaLabelRemove={"'Remove'"}
				onSelect={undefined}
				onToggle={(isExpanded: boolean) => void}
				onClear={(_e: React.MouseEvent) => undefined as void}
				onFilter={null}
				onCreateOption={(_newOptionValue: string) => undefined as void}
				variant={'single'}
				width={''}
				maxHeight={undefined}
				toggleIcon={null}
				customContent={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
