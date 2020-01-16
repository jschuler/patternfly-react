// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ApplicationLauncher } from '../ApplicationLauncher';

describe('ApplicationLauncher test', () => {
  it('ApplicationLauncher should match snapshot', () => {
    const view = mount(
      <ApplicationLauncher
        className={"''"}
				direction={string}
				dropdownItems={[]}
				items={[]}
				isDisabled={false}
				isOpen={false}
				position={string}
				onSelect={(_event: any): any => undefined}
				onToggle={(_value: boolean): any => undefined}
				aria-label={"'Application launcher'"}
				isGrouped={false}
				toggleIcon={<ThIcon />}
				favorites={[]}
				onFavorite={undefined}
				onSearch={undefined}
				searchPlaceholderText={"'Filter by name...'"}
				searchNoResultsText={"'No results found'"}
				searchProps={undefined}
				favoritesLabel={"'Favorites'"}
				toggleId={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
