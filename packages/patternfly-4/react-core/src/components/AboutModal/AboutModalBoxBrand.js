import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from '@patternfly/patternfly-next/components/AboutModalBox/styles.css';

const propTypes = {
  /** additional classes added to the About Modal Brand */
  className: PropTypes.string,
  /** the URL of the image for the Brand. */
  src: PropTypes.string,
  /** the alternate text of the Brand image. */
  alt: PropTypes.string.isRequired
};

const defaultProps = {
  className: '',
  src: ''
};

const AboutModalBoxBrand = ({ className, src, alt, ...props }) => (
  <div className={css(styles.aboutModalBoxBrand, className)}>
    <img {...props} className={css(styles.aboutModalBoxBrandImage)} src={src} alt={alt} />
  </div>
);

AboutModalBoxBrand.propTypes = propTypes;
AboutModalBoxBrand.defaultProps = defaultProps;

export default AboutModalBoxBrand;
