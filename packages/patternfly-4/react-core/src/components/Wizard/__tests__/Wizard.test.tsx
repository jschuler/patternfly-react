// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { Wizard } from '../Wizard';

describe('Wizard test', () => {
  it('Wizard should match snapshot', () => {
    const view = shallow(
      <Wizard
        isOpen={false}
				isInPage={false}
				isCompactNav={false}
				isFullHeight={false}
				isFullWidth={false}
				width={null}
				height={null}
				title={"''"}
				description={"''"}
				onClose={() => undefined as any}
				onGoToStep={null}
				className={"''"}
				steps={[]}
				startAtStep={1}
				ariaLabelNav={"'Steps'"}
				hasBodyPadding={true}
				footer={<>ReactNode</>}
				onSave={undefined}
				onNext={null}
				onBack={null}
				nextButtonText={"'Next'"}
				backButtonText={"'Back'"}
				cancelButtonText={"'Cancel'"}
				ariaLabelCloseButton={"'Close'"}
				appendTo={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
