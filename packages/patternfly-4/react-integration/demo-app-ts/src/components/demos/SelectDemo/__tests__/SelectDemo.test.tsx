// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectDemo } from '../SelectDemo';

describe('SelectDemo test', () => {
  it('SelectDemo should match snapshot', () => {
    const view = shallow(
      <SelectDemo
        singleIsExpanded={true}
				singleSelected={"'defaultString'"}
				disabledSingleIsExpanded={true}
				disabledSingleSelected={"'defaultString'"}
				customSingleIsExpanded={true}
				customSingleSelected={"'defaultString'"}
				checkIsExpanded={true}
				checkSelected={[]}
				typeaheadIsExpanded={true}
				typeaheadSelected={"'defaultString'"}
				typeaheadMultiIsExpanded={true}
				typeaheadMultiSelected={[]}
				cdtypeaheadMultiIsExpanded={{}/*unrecognizedType literal false*/}
				cdtypeaheadMultiSelected={[]}
				plainTypeaheadMultiIsExpanded={true}
				plainTypeaheadMultiSelected={[]}
				plainTypeaheadMultiIsPlain={true}
				customTypeaheadMultiIsExpanded={true}
				customTypeaheadMultiSelected={[]}
				direction={'string'}
				typeaheadOptions={[]}
				typeaheadCreateNew={() => undefined as void}
				typeaheadNewOptions={true}
				customContentIsExpanded={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
