// Auto-generated do not edit

import * as React from 'react';
import { shallow } from 'enzyme';
import { CatalogTile } from '../CatalogTile';

describe('CatalogTile test', () => {
  it('CatalogTile should match snapshot', () => {
    const view = shallow(
      <CatalogTile
        id={null}
				className={"''"}
				featured={false}
				onClick={null}
				href={"null"}
				iconImg={"null"}
				iconAlt={"''"}
				iconClass={"''"}
				icon={<>ReactNode</>}
				badges={[]}
				title={'string'}
				vendor={null}
				description={null}
				maxDescriptionLength={112}
				truncateDescriptionFn={null}
				footer={null}
      />);
    expect(view).toMatchSnapshot();
  });
});
