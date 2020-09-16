---
id: Topology view
section: components
---

Note: Topology lives in its own package at [`@patternfly/react-topology`](https://www.npmjs.com/package/@patternfly/react-topology)

import { ExternalLinkAltIcon, FilmIcon, GlassCheersIcon } from '@patternfly/react-icons';
import { ContextSubMenuItem, BaseGraph, withContextMenu, ContextMenuItem, GraphComponent, TopologyView, TopologyControlBar, createTopologyControlButtons, TopologySideBar } from '@patternfly/react-topology';
import { ProjectToolbar } from './ProjectToolbar';
import { ViewToolbar } from './ViewToolbar';
import { ItemDetails } from './ItemDetails';
import './topology-example.css';
import { Observer } from 'mobx-react';

## Examples
### Default controls
```js isFullscreen
import React from 'react';
import { ContextSubMenuItem, BaseGraph, withContextMenu, ContextMenuItem, GraphComponent, TopologyView, TopologyControlBar, createTopologyControlButtons, TopologySideBar } from '@patternfly/react-topology';
import { ProjectToolbar } from './ProjectToolbar';
import { ViewToolbar } from './ViewToolbar';
import { ItemDetails } from './ItemDetails';
import { Observer } from 'mobx-react';

class DefaultTopologyView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { detailsShown: false };
  }

  render() {
    const { detailsShown } = this.state;
    const controlButtons = createTopologyControlButtons();
    const sideBar = <ItemDetails show={detailsShown} onClose={() => this.setState({ detailsShown: false })} />;

    /*
    withContextMenu(graphContextMenu)(GraphComponent),
    */

  //  const createMenuItems = () => (
  //    <ContextMenuItem
  //     key="menu1"
  //   />
  //  )

  // const createMenuItems = (element) => element.map((item, index) => <ContextMenuItem key={index} />);

  const createMenuItems = (element) => {
  // return element.map((item: any, index: number) => <ContextMenuItem key={index} />);
    return [
      <ContextSubMenuItem key="asd" label="Xfds">
        <ContextMenuItem />
        <ContextMenuItem />
      </ContextSubMenuItem>
    ];
};
    
    // actions.map((option) =>
    //   isKebabSubMenu(option) ? (
    //     <ContextSubMenuItem label={option.label} key={option.label}>
    //       {createMenuItems(option.children)}
    //     </ContextSubMenuItem>
    //   ) : (
    //     <ContextMenuItem
    //       key={option.label}
    //       component={<KebabItem option={option} onClick={() => onKebabOptionClick(option)} />}
    //     />
    //   ),
    // );

    const GraphContainer = (props) => <GraphComponent element={new BaseGraph()} {...props} />;
    const ContextMenuContainer = withContextMenu(createMenuItems, () => document.getElementById('___gatsby'))(GraphContainer);

    return (
      <React.Fragment>
        <TopologyView 
          contextToolbar={<ProjectToolbar />}
          viewToolbar={<ViewToolbar />}
          controlBar={<TopologyControlBar controlButtons={controlButtons} />}
          sideBar={sideBar}
          sideBarOpen={detailsShown}
        >
          <svg style={{ width: '100%', height: '100%' }}><g style={{ width: '100%', height: '100%' }}><ContextMenuContainer /></g></svg>
      </TopologyView>
      </React.Fragment>
    );
  }
}
```

### Selected controls
```js
import React from 'react';
import { TopologyView, TopologyControlBar, createTopologyControlButtons } from '@patternfly/react-topology';
import { ItemDetails } from './ItemDetails';
import { ViewToolbar } from './ViewToolbar';

class SelectedTopologyView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { detailsShown: false };
  }

  render() {
    const { detailsShown } = this.state;
    const sideBar = <ItemDetails show={detailsShown} onClose={() => this.setState({ detailsShown: false })} />;
    const controlButtons = createTopologyControlButtons({ fitToScreen: false, legend: false });

    return (
      <TopologyView
        viewToolbar={<ViewToolbar />}
        controlBar={<TopologyControlBar controlButtons={controlButtons} />}
        sideBar={sideBar}
        sideBarOpen={detailsShown}
      >
        <button onClick={() => this.setState({ detailsShown: !detailsShown })}>
          {detailsShown ? 'Hide Details' : 'Show Details'}
        </button>
      </TopologyView>
    );
  }
}
```

### Custom controls
```js
import React from 'react';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import FilmIcon from '@patternfly/react-icons/dist/js/icons/film-icon';
import GlassCheersIcon from '@patternfly/react-icons/dist/js/icons/glass-cheers-icon';
import { TopologyView, TopologyControlBar, createTopologyControlButtons } from '@patternfly/react-topology';
import { ItemDetails } from './ItemDetails';
import { ViewToolbar } from './ViewToolbar';

class CustomTopologyView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { detailsShown: false };
  }

  render() {
    const { detailsShown } = this.state;
    const sideBar = <ItemDetails show={detailsShown} onClose={() => this.setState({ detailsShown: false })} />;
    const customButtons = [
      {
        id: 'custom-1',
        icon: <ExternalLinkAltIcon />,
        tooltip: 'External Link',
        ariaLabel: 'external link',
        callback: null,
        disabled: true,
        hidden: false
      },
      {
        id: 'custom-2',
        icon: <FilmIcon />,
        tooltip: 'Watch',
        ariaLabel: 'watch',
        callback: null,
        disabled: false,
        hidden: false
      },
      {
        id: 'custom-3',
        icon: <GlassCheersIcon />,
        tooltip: 'Cheers',
        ariaLabel: 'cheers',
        callback: null,
        disabled: false,
        hidden: true
      },
    ]
    const controlButtons = createTopologyControlButtons({ fitToScreen: false, customButtons});

    return (
      <TopologyView
        viewToolbar={<ViewToolbar />}
        controlBar={<TopologyControlBar controlButtons={controlButtons} />}
        sideBar={sideBar}
        sideBarOpen={detailsShown}
      >
        <button onClick={() => this.setState({ detailsShown: !detailsShown })}>
          {detailsShown ? 'Hide Details' : 'Show Details'}
        </button>
      </TopologyView>
    );
  }
}
```
