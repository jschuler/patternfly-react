import { StyleSheet } from '@patternfly/react-styles';
import {
  global_spacer_xs as spacerXs,
  global_spacer_xl as spacerXl
} from '@patternfly/react-tokens';

export default StyleSheet.create({
  apiContent: {
    padding: spacerXl.var
  },
  apiItem: {
    padding: spacerXs.var,
    display: 'block'
  }
});
