// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Tooltip } from '../Tooltip';

describe('Tooltip test', () => {
  it('Tooltip should match snapshot', () => {
    const view = shallow(
      <Tooltip
        appendTo={() => document.body}
				aria={'describedby'}
				boundary={'window'}
				children={<p>ReactElement</p>}
				className={"''"}
				content={<div>ReactNode</div>}
				distance={15}
				enableFlip={true}
				entryDelay={500}
				exitDelay={500}
				flipBehavior={['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']}
				isAppLauncher={false}
				maxWidth={"tooltipMaxWidth && tooltipMaxWidth.value"}
				position={'top'}
				trigger={"'mouseenter focus'"}
				isContentLeftAligned={false}
				isVisible={false}
				zIndex={9999}
				tippyProps={{}}
				id={"''"}
      />);
    expect(view).toMatchSnapshot();
  });
});
