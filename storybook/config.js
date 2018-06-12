import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';
import { checkA11y } from '@storybook/addon-a11y';
import './sass/base.scss';

setAddon(infoAddon);
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
