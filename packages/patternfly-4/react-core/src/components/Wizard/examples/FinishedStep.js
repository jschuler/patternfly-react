import React from 'react';

const FinishedStep = () => (
  <div className="pf-l-bullseye">
    <div className="pf-c-empty-state pf-m-lg">
      <i className="fas fa- fa-cogs pf-c-empty-state__icon" aria-hidden="true" />
      <h1 className="pf-c-title pf-m-lg">Configuration in progress</h1>
      <div className="pf-c-empty-state__body">
        <div className="pf-c-progress pf-m-singleline" id="progress-singleline-example">
          <div className="pf-c-progress__description" id="progress-singleline-example-description" />
          <div className="pf-c-progress__status" aria-hidden="true">
            <span className="pf-c-progress__measure">33%</span>
          </div>
          <div
            className="pf-c-progress__bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow="33"
            aria-describedby="progress-singleline-example-description"
          >
            <div className="pf-c-progress__indicator" style={{ width: '33%' }} />
          </div>
        </div>
      </div>
      <div className="pf-c-empty-state__body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non pulvinar tortor. Maecenas sit amet
        pellentesque velit, eu eleifend mauris.
      </div>
      <div className="pf-c-empty-state__secondary">
        <button className="pf-c-button pf-m-link">Cancel</button>
      </div>
    </div>
  </div>
);

export default FinishedStep;
