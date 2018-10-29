import React from 'react';
import { Title, StyledBox } from '@patternfly/react-core';
import PropTypes from 'prop-types';

const PropsTable = () => null;

const propTypes = {
  title: PropTypes.string.isRequired,
  props: PropTypes.any.isRequired,
  description: PropTypes.string,
  children: PropTypes.any.isRequired
};

const defaultProps = {
  description: ''
};

const Docs = ({ title, description, children, props }) => (
  <React.Fragment>
    <Title size="3xl">{title}</Title>
    <StyledBox component="p" mb={4}>
      {description}
    </StyledBox>
    <section>
      <Title size="xl">Examples</Title>
      <div>{children}</div>
    </section>
    <section>
      <Title size="xl">Props</Title>
      <StyledBox component="p" mb={4}>
        The {title} component accepts the following props:
      </StyledBox>
      <PropsTable props={props} />
    </section>
  </React.Fragment>
);

Docs.propTypes = propTypes;
Docs.defaultProps = defaultProps;

export default Docs;
