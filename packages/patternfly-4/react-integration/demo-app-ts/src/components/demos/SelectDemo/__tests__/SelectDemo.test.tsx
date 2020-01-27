// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { SelectDemo } from '../SelectDemo';
// any missing imports can usually be resolved by adding them here
import {  } from '..';

describe('SelectDemo test', () => {
  it('SelectDemo should match snapshot', () => {
    const view = shallow(
      <SelectDemo
        singleIsExpanded={true}
				singleSelected={"string"}
				disabledSingleIsExpanded={true}
				disabledSingleSelected={"string"}
				customSingleIsExpanded={true}
				customSingleSelected={"string"}
				checkIsExpanded={true}
				checkSelected={[]}
				typeaheadIsExpanded={true}
				typeaheadSelected={"string"}
				typeaheadMultiIsExpanded={true}
				typeaheadMultiSelected={[]}
				cdtypeaheadMultiIsExpanded={() => {}}
				cdtypeaheadMultiSelected={[]}
				plainTypeaheadMultiIsExpanded={true}
				plainTypeaheadMultiSelected={[]}
				plainTypeaheadMultiIsPlain={true}
				customTypeaheadMultiIsExpanded={true}
				customTypeaheadMultiSelected={[]}
				direction={undefined}
				typeaheadOptions={[]}
				typeaheadCreateNew={() => undefined as void}
				typeaheadNewOptions={true}
				customContentIsExpanded={true}
      />);
    expect(view).toMatchSnapshot();
  });
});
