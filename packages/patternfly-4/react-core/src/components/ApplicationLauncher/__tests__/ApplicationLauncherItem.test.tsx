// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ApplicationLauncherItem } from '../ApplicationLauncherItem';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('ApplicationLauncherItem test', () => {
  it('ApplicationLauncherItem should match snapshot', () => {
    const view = shallow(
      <ApplicationLauncherItem
        className={"''"}
				icon={null}
				isExternal={false}
				tooltip={null}
				tooltipProps={null}
				component={'a'}
				isFavorite={null}
				ariaIsFavoriteLabel={"'starred'"}
				ariaIsNotFavoriteLabel={"'not starred'"}
				id={"string"}
				customChild={<div>ReactNode</div>}
				enterTriggersArrowDown={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
