// @flow

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  position: relative;
  min-height: 1px;
  flex-basis: 0;
  flex-grow: 1;
  flex: ${props => (props.colWidth ? `0 0 ${props.colWidth}%` : '0 0 100%')};
  max-width: ${props => (props.colWidth ? `${props.colWidth}%` : '100%')};
`;

export const ColAuto = styled.div`
  position: relative;
  min-height: 1px;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  border-spacing: 0;
`;
export const TableHeader = styled.thead``;
export const TableBody = styled.tbody``;
export const TableRow = styled.tr``;
export const TableColumnHeader = styled.th`
  padding: 0.5rem;
  background: #10436f;
  color: #ffffff;
  font-weight: 500;
  font-size: 0.8rem;
`;
export const TableColumn = styled.td`
  padding: 0.5rem;
  background: #ffffff;
  color: #000000;
  font-weight: 400;
  font-size: 0.8rem;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-color: #e5e5e5;
`;
