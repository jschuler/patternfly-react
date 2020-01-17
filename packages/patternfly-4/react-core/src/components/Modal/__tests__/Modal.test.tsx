// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from '../Modal';

describe('Modal test', () => {
  it('Modal should match snapshot', () => {
    const view = shallow(
      <Modal
        children={<div>ReactNode</div>}
				className={"''"}
				isOpen={false}
				header={undefined}
				title={"'defaultString'"}
				hideTitle={false}
				showClose={true}
				ariaDescribedById={"''"}
				footer={undefined}
				actions={[]}
				isFooterLeftAligned={false}
				onClose={() => undefined as any}
				width={undefined}
				isLarge={false}
				isSmall={false}
				appendTo={(typeof document !== 'undefined' && document.body) || null}
				disableFocusTrap={undefined}
      />);
    expect(view).toMatchSnapshot();
  });
});
