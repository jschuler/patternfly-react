// Auto-generated do not edit

import * as React from 'react';
import { mount } from 'enzyme';
import { ModalContent } from '../ModalContent';

describe('ModalContent test', () => {
  it('ModalContent should match snapshot', () => {
    const view = mount(
      <ModalContent
        children={<>ReactNode</>}
				className={"''"}
				isLarge={false}
				isSmall={false}
				isOpen={false}
				header={null}
				title={"'defaultString'"}
				hideTitle={false}
				showClose={true}
				width={-1}
				footer={null}
				actions={[]}
				isFooterLeftAligned={false}
				onClose={() => undefined as any}
				ariaDescribedById={"''"}
				id={"''"}
				disableFocusTrap={false}
      />);
    expect(view).toMatchSnapshot();
  });
});
