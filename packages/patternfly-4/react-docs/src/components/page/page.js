import React from 'react';
import PropTypes from 'prop-types';
import styles from './page.styles';
import { css } from '@patternfly/react-styles';
import {
  Page as CorePage,
  PageHeader,
  PageSection,
  PageSidebar,
  BackgroundImage,
  BackgroundImageSrc,
  Brand,
  StyledText,
  Toolbar,
  ToolbarGroup,
  ToolbarItem
} from '@patternfly/react-core';
import Helmet from 'react-helmet';
import { navigateTo } from 'gatsby-link';
import brandImg from './l_pf-reverse-164x11.png';
import packageJson from '../../../../react-core/package.json';

const propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  navigation: PropTypes.node
};

const defaultProps = {
  title: 'PatternFly',
  children: null,
  navigation: null
};

class Page extends React.Component {
  static propTypes = propTypes;
  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: true
    };
  }

  onNavToggle = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  };

  render() {
    const { navigation, children, title } = this.props;
    const { isNavOpen } = this.state;

    const bgImages = {
      [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
      [BackgroundImageSrc.md]: '/assets/images/pfbg_992.jpg',
      [BackgroundImageSrc.md2x]: '/assets/images/pfbg_992@2x.jpg',
      [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
      [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
      [BackgroundImageSrc.xl]: '/assets/images/pfbg_2000.jpg',
      [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
      [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
      [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg'
    };
    const Logo = (
      <div to="/" className={css(styles.logo)}>
        <Brand src={brandImg} alt="PatternFly Logo" onClick={() => navigateTo('/')} />
      </div>
    );
    const PageToolbar = (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarItem>
            <StyledText pb={1}>Version: {packageJson.version}</StyledText>
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
    const Header = <PageHeader logo={Logo} toolbar={PageToolbar} showNavToggle onNavToggle={this.onNavToggle} />;
    const Sidebar = <PageSidebar nav={navigation} isNavOpen={isNavOpen} />;

    return (
      <React.Fragment>
        <Helmet title={title} />
        <BackgroundImage src={bgImages} />
        <CorePage header={Header} sidebar={Sidebar}>
          <PageSection className={css(styles.section)}>{children}</PageSection>
        </CorePage>
      </React.Fragment>
    );
  }
}

export default Page;
