import { StyleSheet } from '@patternfly/react-styles';
import { global_spacer_md as spacerMd } from '@patternfly/react-tokens';

export default StyleSheet.create({
  page: {
    display: 'flex',
    minHeight: '100%',
    width: '100%'
  },
  nav: {
    position: 'relative',
    flexShrink: 0
  },
  main: {
    position: 'relative',
    flex: '1 1 auto',
    overflowX: 'hidden'
  },
  section: {
    overflowX: 'auto'
  },
  logo: {
    marginBottom: '5px'
  },
});
