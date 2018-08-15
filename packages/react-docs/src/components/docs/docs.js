import React from 'react';
import styles from './docs.styles';
import { css } from '@patternfly/react-styles';
import { Title } from '@patternfly/react-core';
import Content from '../content';
import PropTypes from 'prop-types';
import PropsTable from '../propsTable';
import Demo from '../example/demo';

const propTypes = {
  title: PropTypes.string.isRequired,
  props: PropTypes.any.isRequired,
  description: PropTypes.string,
  children: PropTypes.any.isRequired,
  markdown: PropTypes.any
};

const defaultProps = {
  description: '',
  markdown: null
};

const Docs = ({ title, description, children, props }) => (
  <Content>
    <Title size="3xl" withMargins>
      {title}
    </Title>
    <p className={css(styles.description)}>{description}</p>
    <section>
      <Title size="xl" withMargins>
        Examples
      </Title>
      <div>{children}</div>
    </section>
    <section>
      <Title size="xl" withMargins>
        Props
      </Title>
      <p className={css(styles.description)}>The {title} component accepts the following props:</p>
      <PropsTable props={props} />
    </section>

    {/* {examples && (
      <section>
        <Title size="xl" withMargins>
          Examples
        </Title>
        <div>
          {examples.map((example, index) => (
            <React.Fragment key={`${example.title}_${index}`}>
              <Title size="lg" withMargins>
                {example.title}
              </Title>
              <Demo
                key={`${title}${index}`}
                js={example.js}
                raw={example.raw}
                github={example.github}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    )}
    {!examples && (
      <section>
        <Title size="xl" withMargins>
          Props
        </Title>
        <p className={css(styles.description)}>
          The {title} component accepts the following props:
        </p>
        <PropsTable props={props} />
      </section>
    )} */}
  </Content>
);

Docs.propTypes = propTypes;
Docs.defaultProps = defaultProps;

export default Docs;
