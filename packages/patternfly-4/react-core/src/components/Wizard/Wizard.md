---
title: 'Wizard'
cssPrefix: 'pf-c-wizard'
---

import { Button, Wizard, WizardFooter, WizardContextConsumer, Alert } from '@patternfly/react-core';
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
      { name: 'Step 2', component: <p>Step 2</p> },
      { name: 'Step 3', component: <p>Step 3</p> },
      { name: 'Step 4', component: <p>Step 4</p> },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' }
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

### Wizard - compact navigation (Wizard isCompact prop)
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
      { name: 'Step 2', component: <p>Step 2</p> },
      { name: 'Step 3', component: <p>Step 3</p> },
      { name: 'Step 4', component: <p>Step 4</p> },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' }
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

### Wizard - steps not clickable in side nav until step is reached (step canJumpTo prop)
```js
import React from 'react';
import { Button, Wizard } from '@patternfly/react-core';

class DisabledStepsWizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      stepIdReached: 1
    };
    this.toggleOpen = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };
    this.onNext = ({ id }) => {
      this.setState({
        stepIdReached: this.state.stepIdReached < id ? id : this.state.stepIdReached
      });
    };
  }

  render() {
    const { isOpen, stepIdReached } = this.state;

    const steps = [
      { id: 1, name: 'Step 1', component: <p>Step 1</p> },
      { id: 2, name: 'Step 2', component: <p>Step 2</p>, canJumpTo: stepIdReached >= 2 },
      { id: 3, name: 'Step 3', component: <p>Step 3</p>, canJumpTo: stepIdReached >= 3 },
      { id: 4, name: 'Step 4', component: <p>Step 4</p>, canJumpTo: stepIdReached >= 4 },
      { id: 5, name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish', canJumpTo: stepIdReached >= 5 }
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
            onNext={this.onNext}
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
      { name: 'Step 2', component: <p>Step 2</p> },
      { name: 'Step 3', component: <p>Step 3</p> },
      { name: 'Step 4', component: <p>Step 4</p> },
      { name: 'Review', component: <p>Review Step</p>, nextButtonText: 'Finish' },
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

### Wizard - validate on button press
```js
import React from 'react';
import { Button, Wizard, WizardFooter, Alert } from '@patternfly/react-core';
import SampleForm from './examples/SampleForm';
import FinishedStep from './examples/FinishedStep';

class ValidateButtonPressWizard extends React.Component {
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
      { name: 'Step 2', component: <p>Step 2</p> },
      { name: 'Finish', component: <FinishedStep onClose={this.toggleOpen} />, isFinishedStep: true }
    ];

    const CustomFooter = (
      <WizardFooter>
        asd
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
            footer={<WizardFooter>asd</WizardFooter>}
            title="Validate on button press"
            steps={steps}
          />
        )}
      </React.Fragment>
    );
  }
}
```
