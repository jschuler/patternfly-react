import React from 'react';
import { ApplicationLauncher, DropdownItem, Tooltip } from '@patternfly/react-core';

interface ApplicationLauncherState {
  isOpen: boolean;
}

export class ApplicationLauncherDemo extends React.Component<null, ApplicationLauncherState> {
  onToggle: (isOpen: boolean) => void;
  onSelect: (event: any) => void;
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.onToggle = isOpen => {
      this.setState({
        isOpen
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.onSelect = _event => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isOpen } = this.state;
    const dropdownItems = [
      <Tooltip content={<div>Launch Application 1</div>} key="1">
        <DropdownItem key="application_1" component="a" href="http://patternfly-react.surge.sh/">
          Application 1
        </DropdownItem>
      </Tooltip>,
      <Tooltip content={<div>Launch Application 2</div>} position="right" key="2">
        <DropdownItem key="application_2" component="a">
          Application 2
        </DropdownItem>
      </Tooltip>,
      <Tooltip content={<div>Launch Application 3</div>} position="right" key="3">
        <DropdownItem key="application_3" component="a">
          Application 3
        </DropdownItem>
      </Tooltip>,
      <Tooltip content={<div>Application Unavailable At This Time</div>} position="bottom" key="4">
        <DropdownItem key="disabled_application_4" isDisabled component="a">
          Unavailable Application
        </DropdownItem>
      </Tooltip>
    ];
    return (
      <ApplicationLauncher
        onSelect={this.onSelect}
        onToggle={this.onToggle}
        toggleId="toggle"
        isOpen={isOpen}
        dropdownItems={dropdownItems}
      />
    );
  }
}
