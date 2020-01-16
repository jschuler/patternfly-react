// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ApplicationLauncherItem } from '../ApplicationLauncherItem';

describe('ApplicationLauncherItem test', () => {
  it('ApplicationLauncherItem should match snapshot', () => {
    const view = mount(
      <ApplicationLauncherItem
        icon={null}
				isExternal={false}
				tooltip={null}
				tooltipProps={null}
				component={'a'}
				isFavorite={null}
				ariaIsFavoriteLabel={"'starred'"}
				ariaIsNotFavoriteLabel={"'not starred'"}
				id={undefined}
				customChild={undefined}
				enterTriggersArrowDown={false}
				className={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
