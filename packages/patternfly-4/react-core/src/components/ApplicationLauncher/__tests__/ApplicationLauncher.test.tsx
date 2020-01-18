// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ApplicationLauncher } from '../ApplicationLauncher';

describe('ApplicationLauncher test', () => {
  it('ApplicationLauncher should match snapshot', () => {
    const view = shallow(
      <ApplicationLauncher
        className={"''"}
				direction={'up'}
				dropdownItems={[]}
				items={[]}
				isDisabled={false}
				isOpen={false}
				position={'right'}
				onSelect={(_event: any): any => undefined}
				onToggle={(_value: boolean): any => undefined}
				aria-label={"'Application launcher'"}
				isGrouped={false}
				toggleIcon={<>ReactNode</>}
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
