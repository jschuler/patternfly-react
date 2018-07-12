import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { checkA11y, configureA11y } from '@storybook/addon-a11y';
import './sass/base.scss';

addDecorator(withInfo);

// https://pf-next.com/accessibility-guide/
// Goal is to meet level AA in the Web Content Accessibility Guidelines (includes level A)
const axeOptions = {
  runOnly: ['wcag2a', 'wcag2aa']
};
configureA11y(axeOptions);
addDecorator(checkA11y);

const coreContext = require.context('../packages/core', true, /\.stories\.js$/);
const consoleContext = require.context(
  '../packages/console',
  true,
  /\.stories\.js$/
);

function loadStories() {
  coreContext.keys().forEach(coreContext);
  consoleContext.keys().forEach(consoleContext);
}

setOptions({
  /**
   * name to display in the top left corner
   * default: Storybook
   * @type {String}
   */
  name: 'Patternfly-React',
  /**
   * sorts stories
   * default: false
   * @type {Boolean}
   */
  sortStoriesByKind: true
});

configure(loadStories, module);
