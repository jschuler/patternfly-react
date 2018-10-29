import React from 'react';
import PropTypes from 'prop-types';
import Example from '../example';
import { Title, StyledBox } from '@patternfly/react-core';
import PropsTable from '../propsTable';
import Section from '../section';
import { GitHubMarkdownStyles } from '../../pages/styles/github-markdown';
import { css } from '@patternfly/react-styles';
import Showdown from 'showdown';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  examples: PropTypes.arrayOf(PropTypes.func),
  components: PropTypes.objectOf(PropTypes.func),
  enumValues: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.any)),
  rawExamples: PropTypes.array,
  images: PropTypes.array,
  fullPageOnly: PropTypes.bool
};

const defaultProps = {
  description: '',
  examples: [],
  components: {},
  enumValues: {},
  rawExamples: [],
  images: [],
  fullPageOnly: false
};

class ComponentDocs extends React.PureComponent {
  render() {
    const { title, description, examples, components, enumValues, fullPageOnly, rawExamples, images } = this.props;
    const converter = new Showdown.Converter({
      smartIndentationFix: true
    });
    converter.setFlavor('github');
    return (
      <React.Fragment>
        <Title size="3xl">{title}</Title>
        {Boolean(description) && (
          <StyledBox
            my={4}
            className={css(GitHubMarkdownStyles.markdownBody)}
            dangerouslySetInnerHTML={{ __html: converter.makeHtml(description) }}
          />
        )}
        <Section title="Examples">
          {examples.map((ComponentExample, i) => {
            const { __docgenInfo: componentDocs } = ComponentExample;
            const rawExample = rawExamples.find(example => example.name === componentDocs.displayName);
            return (
              <Example
                key={i}
                title={ComponentExample.title}
                description={ComponentExample.description}
                raw={rawExample.file}
                path={rawExample.path}
                images={images}
                fullPageOnly={fullPageOnly}
                live={ComponentExample.live}
                liveScope={ComponentExample.liveScope}
                name={componentDocs.displayName}
                {...(ComponentExample.getContainerProps ? ComponentExample.getContainerProps() : {})}
              >
                <ComponentExample />
              </Example>
            );
          })}
        </Section>
        {Object.entries(components).map(([componentName, { __docgenInfo: componentDocs }]) => (
          <PropsTable key={componentName} name={componentName} props={componentDocs.props} enumValues={enumValues} />
        ))}
      </React.Fragment>
    );
  }
}

ComponentDocs.propTypes = propTypes;
ComponentDocs.defaultProps = defaultProps;

export default ComponentDocs;
