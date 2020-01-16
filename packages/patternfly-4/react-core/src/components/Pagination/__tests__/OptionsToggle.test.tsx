// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { OptionsToggle } from '../OptionsToggle';

describe('OptionsToggle test', () => {
  it('OptionsToggle should match snapshot', () => {
    const view = mount(
      <OptionsToggle
        itemsTitle={"'items'"}
				optionsToggle={"'Select'"}
				itemsPerPageTitle={"'Items per page'"}
				firstIndex={0}
				lastIndex={0}
				itemCount={0}
				widgetId={"''"}
				showToggle={true}
				onToggle={(_isOpen: boolean) => undefined as any}
				isOpen={false}
				isDisabled={false}
				parentRef={null}
				toggleTemplate={''}
				onEnter={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
