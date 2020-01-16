// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { Popover } from '../Popover';

describe('Popover test', () => {
  it('Popover should match snapshot', () => {
    const view = mount(
      <Popover
        aria-label={"''"}
				appendTo={() => document.body}
				bodyContent={<>ReactNode</>}
				boundary={'window'}
				children={unrecognizedType ReactElement undefined, consider reporting error to react-jest-test-generator.}
				className={"''"}
				closeBtnAriaLabel={"'Close'"}
				distance={25}
				enableFlip={true}
				flipBehavior={['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom']}
				footerContent={null}
				headerContent={null}
				hideOnOutsideClick={true}
				isVisible={null}
				maxWidth={"popoverMaxWidth && popoverMaxWidth.value"}
				onHidden={(): void => null}
				onHide={(): void => null}
				onMount={(): void => null}
				onShow={(): void => null}
				onShown={(): void => null}
				position={'top'}
				shouldClose={(): void => null}
				zIndex={9999}
				tippyProps={{}}
      />);
    expect(view).toMatchSnapshot();
  });
});
