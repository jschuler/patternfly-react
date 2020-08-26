import * as React from 'react';
import styles from '@patternfly/react-styles/css/components/Drawer/drawer';
import { css } from '@patternfly/react-styles';
import { getOUIAProps, OUIAProps } from '../../helpers';

export interface DrawerProps extends React.HTMLProps<HTMLDivElement>, OUIAProps {
  /** Additional classes added to the Drawer. */
  className?: string;
  /** Content rendered in the left hand panel */
  children?: React.ReactNode;
  /** Indicates if the drawer is expanded */
  isExpanded?: boolean;
  /** Indicates if the content element and panel element are displayed side by side. */
  isInline?: boolean;
  /** Indicates if the drawer will always show both content and panel. */
  isStatic?: boolean;
  /** Position of the drawer panel */
  position?: 'left' | 'right';
  /** Callback when drawer panel is expanded after waiting 250ms for animation to complete. */
  onExpand?: () => void;
}

export interface DrawerContextProps {
  isExpanded: boolean;
  isStatic: boolean;
  onExpand?: () => void;
}

export const DrawerContext = React.createContext<Partial<DrawerContextProps>>({
  isExpanded: false,
  isStatic: false,
  onExpand: () => {}
});

export const Drawer: React.SFC<DrawerProps> = ({
  className = '',
  children,
  isExpanded = false,
  isInline = false,
  isStatic = false,
  position = 'right',
  onExpand = () => {},
  ...props
}: DrawerProps) => {
  if (!(window as any).ouiaId) {
    (window as any).ouiaId = {};
  }
  if (!(window as any).ouiaId[window.location.href]) {
    (window as any).ouiaId[window.location.href] = 1;
  }
  const [ouiaStateId, setOuiaStateId] = React.useState(++(window as any).ouiaId[window.location.href]);
  return (
    <DrawerContext.Provider value={{ isExpanded, isStatic, onExpand }}>
      <div
        className={css(
          styles.drawer,
          isExpanded && styles.modifiers.expanded,
          isInline && styles.modifiers.inline,
          isStatic && styles.modifiers.static,
          position === 'left' && styles.modifiers.panelLeft,
          className
        )}
        {...getOUIAProps(Drawer.displayName, ouiaStateId, true)}
        {...props}
      >
        {children}
      </div>
    </DrawerContext.Provider>
  );
};
Drawer.displayName = 'Drawer';
