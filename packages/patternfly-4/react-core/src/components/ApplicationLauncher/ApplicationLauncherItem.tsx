import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/AppLauncher/app-launcher';
import accessibleStyles from '@patternfly/react-styles/css/utilities/Accessibility/accessibility';
import { DropdownItem, DropdownItemProps } from '../Dropdown';
import { ApplicationLauncherIcon } from './InternalApplicationLauncherIcon';
import { ApplicationLauncherText } from './InternalApplicationLauncherText';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';

export interface ApplicationLauncherItemProps {
  /** Icon rendered before the text */
  icon?: React.ReactNode;
  /** If clicking on the item should open the page in a separate window */
  isExternal?: boolean;
  /** Tooltip to display when hovered over the item */
  tooltip?: React.ReactNode;
  /** Additional tooltip props forwarded to the Tooltip component */
  tooltipProps?: any;
  component?: any;
}

export const ApplicationLauncherItem: React.FunctionComponent<ApplicationLauncherItemProps & DropdownItemProps> = ({
  className = '',
  children,
  icon = null,
  isExternal = false,
  href,
  tooltip = null,
  tooltipProps = null,
  component = null,
  ...props
}: ApplicationLauncherItemProps & DropdownItemProps) => {
  const Component = children;
  const asd = component;
  return (
    <DropdownItem
      href={href || null}
      className={css(isExternal && styles.modifiers.external, className)}
      tooltip={tooltip}
      tooltipProps={tooltipProps}
      {...props}
    >
      {children}
    </DropdownItem>
  );
  return (
  <DropdownItem
    href={href || null}
    className={css(isExternal && styles.modifiers.external, className)}
    tooltip={tooltip}
    tooltipProps={tooltipProps}
    {...props}
  >
    {icon && <ApplicationLauncherIcon>{icon}</ApplicationLauncherIcon>}
    {icon ? <ApplicationLauncherText>{children}</ApplicationLauncherText> : children}
    {isExternal && (
      <>
        <span className={css(styles.appLauncherMenuItemExternalIcon)}><ExternalLinkAltIcon /></span>
        <span className={css(accessibleStyles.screenReader)}>(opens new window)</span>
      </>
    )}
  </DropdownItem>
)};
