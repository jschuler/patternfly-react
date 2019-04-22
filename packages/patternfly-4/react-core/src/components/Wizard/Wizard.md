---
title: 'Wizard'
cssPrefix: 'pf-c-wizard'
---

import { Button, Wizard, WizardFooter, WizardContext, Alert } from '@patternfly/react-core';
import FinishedStep from './examples/FinishedStep';
import SampleForm from './examples/SampleForm';

### Simple Wizard
```js
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';

class SimpleWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;

    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      { name: 'Step 2', component: <p>Step 2</p>, enabled: true },
      { name: 'Step 3', component: <p>Step 3</p>, enabled: true },
      { name: 'Step 4', component: <p>Step 4</p>, enabled: true },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish', enabled: true }
    ];

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.toggleOpen}>
          Show Wizard
        </Button>
        {isOpen && (
          <Wizard
            isOpen={isOpen}
            onClose={this.toggleOpen}
            title="Simple Wizard"
            description="Simple Wizard Description"
            steps={steps}
          />
        )}
      </React.Fragment>
    );
  }
}
```

### Wizard - compact navigation
```js
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';

class CompactWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;

    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      { name: 'Step 2', component: <p>Step 2</p>, enabled: true },
      { name: 'Step 3', component: <p>Step 3</p>, enabled: true },
      { name: 'Step 4', component: <p>Step 4</p>, enabled: true },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish', enabled: true }
    ];

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.toggleOpen}>
          Show Wizard
        </Button>
        {isOpen && (
          <Wizard
            isOpen={isOpen}
            isCompact
            onClose={this.toggleOpen}
            title="Simple Wizard"
            description="Simple Wizard Description"
            steps={steps}
          />
        )}
      </React.Fragment>
    );
  }
}
```

### Wizard - finished step
```js
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';
import FinishedStep from './examples/FinishedStep';

class FinishedStepWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
  }

  render() {
    const { isOpen } = this.state;

    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      { name: 'Step 2', component: <p>Step 2</p>, enabled: true },
      { name: 'Step 3', component: <p>Step 3</p>, enabled: true },
      { name: 'Step 4', component: <p>Step 4</p>, enabled: true },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish', enabled: true },
      { name: 'Finish', component: <FinishedStep onClose={this.toggleOpen} />, isFinishedStep: true }
    ];

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.toggleOpen}>
          Show Wizard
        </Button>
        {isOpen && (
          <Wizard
            isOpen={isOpen}
            isCompact
            onClose={this.toggleOpen}
            title="Simple Wizard"
            description="Simple Wizard Description"
            steps={steps}
          />
        )}
      </React.Fragment>
    );
  }
}
```

### Wizard - enable Next button on form validation
```js
import React from 'react';
import { Button, Wizard, Form, FormGroup, TextInput } from '@patternfly/react-core';
import SampleForm from './examples/SampleForm';

class ValidationWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isFormValid: false,
      formValue: 'Thirty',
      allStepsValid: false
    };

    this.toggleOpen = () => {
      this.setState(({ isOpen }) => ({
        isOpen: !isOpen
      }));
    };

    this.onFormChange = (isValid, value) => {
      this.setState(
        {
          isFormValid: isValid,
          formValue: value
        },
        this.areAllStepsValid
      );
    };

    this.areAllStepsValid = () => {
      this.setState({
        allStepsValid: this.state.isFormValid
      });
    };

    this.onNext = ({ id, name }, { prevId, prevName }) => {
      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
      this.areAllStepsValid();
    };

    this.onBack = ({ id, name }, { prevId, prevName }) => {
      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
      this.areAllStepsValid();
    };

    this.onGoToStep = ({ id, name }, { prevId, prevName }) => {
      console.log(`current id: ${id}, current name: ${name}, previous id: ${prevId}, previous name: ${prevName}`);
    };

    this.onSave = () => {
      console.log('Saved and closed the wizard');
      this.setState({
        isOpen: false
      });
    };
  }

  render() {
    const { isOpen, isFormValid, formValue, allStepsValid } = this.state;

    const steps = [
      { id: 1, name: 'Information', component: <p>Step 1</p> },
      {
        name: 'Configuration',
        steps: [
          {
            id: 2,
            name: 'Substep A with validation',
            component: (
              <SampleForm formValue={formValue} isFormValid={isFormValid} onChange={this.onFormChange} />
            ),
            enableNext: isFormValid
          },
          { id: 4, name: 'Substep B', component: <p>Substep B</p> }
        ]
      },
      { id: 5, name: 'Additional', component: <p>Step 3</p>, enableNext: allStepsValid },
      { id: 6, name: 'Review', component: <p>Step 4</p>, nextButtonText: 'Close' }
    ];

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.toggleOpen}>
          Show Wizard
        </Button>
        {isOpen && (
          <Wizard
            isOpen={isOpen}
            title="Validation Wizard"
            description="Validation Wizard Description"
            onClose={this.toggleOpen}
            onSave={this.onSave}
            steps={steps}
            onNext={this.onNext}
            onBack={this.onBack}
            onGoToStep={this.onGoToStep}
          />
        )}
      </React.Fragment>
    );
  }
}
```

### Wizard - custom footer and progressive steps
```js
import React from 'react';
import { Button, Wizard, WizardFooter, WizardContext, Alert } from '@patternfly/react-core';
import SampleForm from './examples/SampleForm';
import FinishedStep from './examples/FinishedStep';

class ProgressiveWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      stepsValid: 0
    };
    this.toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.validateLastStep = onNext => {
      const { stepsValid } = this.state;
      if (stepsValid !== 1) {
        this.setState({
          stepsValid: 1
        });
      } else {
        onNext();
      }
    };
  }

  render() {
    const { isOpen, stepsValid } = this.state;

    const steps = [
      { name: 'Step 1', component: <p>Step 1</p> },
      {
        name: 'Step 2',
        steps: [
          { name: 'Step 2 - A', component: <p>Step 2 - A</p> },
          { name: 'Step 2 - B', component: <p>Step 2 - B</p> }
        ]
      },
      { name: 'Step 3', component: <p>Step 3</p> },
      { 
        name: 'Final Step', 
        component: (
          <>
            <SampleForm formValue="Validating on button press" isFormValid={stepsValid !== 1} />
            {stepsValid === 1 && <div style={{padding: '15px 0'}}><Alert variant="warning" title="Validation failed, please try again" /></div>}
          </>
        )
      },
      { name: 'Finish', component: <FinishedStep onClose={this.toggleOpen} />, isFinishedStep: true }
    ];

    const CustomFooter = (
      <WizardFooter>
        <WizardContext.Consumer>
          {({ activeStep, goToStepByName, goToStepById, onNext, onBack, onClose }) => {
            if (activeStep.name !== 'Final Step') {
              return (
                <>
                  <Button variant="primary" type="submit" onClick={onNext}>
                    Forward
                  </Button>
                  <Button variant="secondary" onClick={onBack} className={activeStep.name === 'Step 1' ? 'pf-m-disabled' : ''}>
                    Backward
                  </Button>
                  <Button variant="link" onClick={onClose}>
                    Cancel
                  </Button>
                </>
              )
            }
            // Final step buttons
            return (
              <>
                <Button onClick={() => this.validateLastStep(onNext)}>Validate</Button>
                <Button onClick={() => goToStepByName('Step 1')}>Go to Beginning</Button>
              </>
            )}}
        </WizardContext.Consumer>
      </WizardFooter>
    );

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.toggleOpen}>
          Show Wizard
        </Button>
        {isOpen && (
          <Wizard
            isOpen={isOpen}
            onClose={this.toggleOpen}
            footer={CustomFooter}
            title="Custom Footer"
            steps={steps}
          />
        )}
      </React.Fragment>
    );
  }
}
```
