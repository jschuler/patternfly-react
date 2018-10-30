import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import PropTypes from 'prop-types';
import { StyledBox, TextInput, Nav, NavGroup, NavItem } from '@patternfly/react-core';

const routeShape = PropTypes.shape({
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
});

const propTypes = {
  componentRoutes: PropTypes.arrayOf(routeShape),
  layoutRoutes: PropTypes.arrayOf(routeShape),
  demoRoutes: PropTypes.arrayOf(routeShape)
};

const defaultProps = {
  componentRoutes: [],
  layoutRoutes: [],
  demoRoutes: []
};

class Navigation extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    const location = window && window.location;

    this.state = {
      searchValue: '',
      activeItem: location ? location.pathname : ''
    };
  }

  handleSearchChange = searchValue => {
    this.setState(() => ({
      searchValue
    }));
  };

  onSelect = result => {
    this.setState({
      activeItem: result.to
    });
  };

  onNavItemClick = (event, itemId, groupId, to) => {
    navigateTo(to);
  };

  render() {
    const { componentRoutes, layoutRoutes, demoRoutes } = this.props;
    const { searchValue, activeItem } = this.state;

    const searchRE = new RegExp(searchValue, 'i');

    const filteredComponentRoutes = componentRoutes.filter(c => searchRE.test(c.label));

    const filteredLayoutRoutes = layoutRoutes.filter(c => searchRE.test(c.label));

    const filteredDemoRoutes = demoRoutes.filter(c => searchRE.test(c.label));

    return (
      <React.Fragment>
        <StyledBox m={2}>
          <TextInput
            placeholder="Find components, layouts,..."
            type="text"
            value={searchValue}
            onChange={this.handleSearchChange}
            id="search-box"
          />
        </StyledBox>
        <Nav onSelect={this.onSelect} aria-label="Primary Nav Grouped Example">
          <NavGroup title="Styles">
            <NavItem
              preventDefault
              to="/styles/tokens"
              onClick={this.onNavItemClick}
              isActive={activeItem === '/styles/tokens'}
            >
              Tokens
            </NavItem>
            <NavItem
              preventDefault
              to="/styles/icons"
              onClick={this.onNavItemClick}
              isActive={activeItem === '/styles/icons'}
            >
              Icons
            </NavItem>
          </NavGroup>
          {Boolean(filteredComponentRoutes.length) && (
            <NavGroup title="Components">
              {filteredComponentRoutes.map(route => (
                <NavItem key={route.label} to={route.to} isActive={activeItem === route.to}>
                  <Link to={route.to}>{route.label}</Link>
                </NavItem>
              ))}
            </NavGroup>
          )}
          {Boolean(filteredLayoutRoutes.length) && (
            <NavGroup title="Layouts">
              {filteredLayoutRoutes.map(route => (
                <NavItem
                  preventDefault
                  key={route.label}
                  to={route.to}
                  onClick={this.onNavItemClick}
                  isActive={activeItem === route.to}
                >
                  {route.label}
                </NavItem>
              ))}
            </NavGroup>
          )}
          {Boolean(filteredDemoRoutes.length) && (
            <NavGroup title="Demos">
              {filteredDemoRoutes.map(route => (
                <NavItem preventDefault key={route.label} to={route.to} isActive={activeItem === route.to}>
                  {route.label}
                </NavItem>
              ))}
            </NavGroup>
          )}
        </Nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
