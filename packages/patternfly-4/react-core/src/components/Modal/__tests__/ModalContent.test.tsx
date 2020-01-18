// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { ModalContent } from '../ModalContent';

describe('ModalContent test', () => {
  it('ModalContent should match snapshot', () => {
    const view = shallow(
      <ModalContent
        children={<div>ReactNode</div>}
				className={"''"}
				isLarge={false}
				isSmall={false}
				isOpen={false}
				header={<>ReactNode</>}
				title={"'defaultString'"}
				hideTitle={false}
				showClose={true}
				width={-1}
				footer={<>ReactNode</>}
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
