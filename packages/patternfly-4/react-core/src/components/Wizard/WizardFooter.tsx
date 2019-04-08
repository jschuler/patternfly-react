import * as React from 'react';
import styles from '@patternfly/patternfly/components/Wizard/wizard.css';
import { css } from '@patternfly/react-styles';
import { Button } from '../Button';
import { WizardStep } from './Wizard';

interface WizardFooterProps {
  footerItems: any;
  footerRightAlign: boolean;
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

const WizardFooter: React.SFC<WizardFooterProps> = ({
  footerItems,
  footerRightAlign,
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
}) => {
  const defaultButtons = (
    <>
      <Button variant="primary" type="submit" onClick={onNext} isDisabled={!isValid}>
        {lastStep ? lastStepButtonText : nextButtonText}
      </Button>
      {!firstStep && !activeStep.hideBackButton && <Button variant="secondary" onClick={onBack}>
        {backButtonText}
      </Button>}
      {!activeStep.hideCancelButton && <Button variant="link" onClick={onClose}>
        {cancelButtonText}
      </Button>}
    </>
  );
  return (
    <footer className={css(styles.wizardFooter, footerRightAlign && 'pf-m-align-right')}>
      {footerItems || defaultButtons}
    </footer>
  )
};

export default WizardFooter;