import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';

export interface WizardBodyProps {
  /** Anything that can be rendered in the Wizard body */
  children: any;
  /** Set to false to remove the default body padding */
  hasBodyPadding: boolean;
}

const WizardBody: React.SFC<WizardBodyProps> = ({ children, hasBodyPadding = true }) => (
  <main className={css(styles.wizardMain, !hasBodyPadding && 'pf-m-no-padding')}>
    <div className={css(styles.wizardMainBody)}>
      {children}
    </div>
  </main>
);

export default WizardBody;