import React from 'react';
import { css } from '@patternfly/react-styles';
import { GitHubMarkdownStyles } from './styles/github-markdown';

const IndexPage = ({ data }) => {
  const { markdownRemark } = data;
  let { html } = markdownRemark;
  html = html.replace(
    /href="\./g,
    'href="https://github.com/patternfly/patternfly-react/tree/master/packages/patternfly-4/react-core/.'
  );
  return (
    <div className={css(GitHubMarkdownStyles.markdownBody)} dangerouslySetInnerHTML={{ __html: html }} />
    // <StyledBox className={css(styles.hero)} m={-4}>
    //   <StyledBox p={6}>
    //     <Title size="4xl" className={css(styles.heroText)}>
    //       PatternFly React
    //     </Title>
    //     <Title size="md" className={css(styles.heroText)}>
    //       Version: {packageJson.version}
    //     </Title>
    //     <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
    //   </StyledBox>
    // </StyledBox>
  );
};

export default IndexPage;

export const markdownQuery = graphql`
  query GetReadme {
    markdownRemark(fileAbsolutePath: { glob: "**/react-core/README.md" }) {
      html
    }
  }
`;
