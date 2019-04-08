import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { WizardStep } from './Wizard';

interface WizardFooterProps {
  /** Buttons in the footer */
  children: any;
}

const WizardFooter: React.SFC<WizardFooterProps> = ({
  children
}) => {
  return (
    <footer className={css(styles.wizardFooter)}>
      {children}
    </footer>
  )
};

interface WizardFooterInternalProps {
  onNext: any;
  onBack: any;
  onClose: any;
  isValid: boolean;
  firstStep: boolean;
  lastStep: boolean;
  activeStep: WizardStep;
  lastStepButtonText: string;
  nextButtonText: string;
  backButtonText: string;
  cancelButtonText: string;
}

const WizardFooterInternal: React.SFC<WizardFooterInternalProps> = ({
  onNext,
  onBack,
  onClose,
  isValid,
  firstStep,
  lastStep,
  activeStep,
  lastStepButtonText,
  nextButtonText,
  backButtonText,
  cancelButtonText
}) => (
    <footer className={css(styles.wizardFooter)}>
      <Button variant="primary" type="submit" onClick={onNext} isDisabled={!isValid}>
        {lastStep ? lastStepButtonText : nextButtonText}
      </Button>
      {!activeStep.hideBackButton && <Button variant="secondary" onClick={onBack} className={css(firstStep && 'pf-m-disabled')}>
        {backButtonText}
      </Button>}
      {!activeStep.hideCancelButton && <Button variant="link" onClick={onClose}>
        {cancelButtonText}
      </Button>}
    </footer>
  );

export { WizardFooter, WizardFooterInternal };