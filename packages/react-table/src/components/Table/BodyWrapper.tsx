import * as React from 'react';
import { css } from '@patternfly/react-styles';
import styles from '@patternfly/react-styles/css/components/Table/table';
import { IRow, IRowData, IExtraData, IHeaderRow } from './Table';
import { mapOpenedRows } from './utils/headerUtils';
import { BaseTableBody } from '../BaseTable/BaseTableBody';

export interface BodyWrapperProps {
  children?: React.ReactNode;
  mappedRows?: IRow[];
  rows?: IRow[];
  onCollapse?: (
    event: React.MouseEvent,
    rowIndex: number,
    isOpen: boolean,
    rowData: IRowData,
    extraData: IExtraData
  ) => undefined;
  tbodyRef?: React.Ref<any> | Function;
  headerRows?: IHeaderRow[];
}

export const BodyWrapper: React.FunctionComponent<BodyWrapperProps> = ({
  mappedRows,
  tbodyRef,
  /* eslint-disable @typescript-eslint/no-unused-vars */
  rows = [] as IRow[],
  onCollapse,
  headerRows,
  /* eslint-enable @typescript-eslint/no-unused-vars */
  ...props
}: BodyWrapperProps) => {
  if (mappedRows && mappedRows.some(row => row.hasOwnProperty('parent'))) {
    return (
      <React.Fragment>
        {mapOpenedRows(mappedRows, props.children).map((oneRow, key) => (
          <BaseTableBody
            {...props}
            className={css(oneRow.isOpen && styles.modifiers.expanded)}
            key={`tbody-${key}`}
            ref={tbodyRef as React.Ref<any>}
          >
            {oneRow.rows}
          </BaseTableBody>
        ))}
      </React.Fragment>
    );
  }
  return <BaseTableBody {...props} ref={tbodyRef as React.Ref<any>} />;
};
BodyWrapper.displayName = 'BodyWrapper';
