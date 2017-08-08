// @flow

import styled, { css } from 'styled-components';
import { Row, Column } from 'hedron';

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

export const Content = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;
export const ContentTitle = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  border-color: #e5e5e5;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-bottom: 0.2rem;
  margin-bottom: 1rem;
`;
export const ContentBody = styled.div``;

export const List = styled.div`
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.87);
  }

  a > section:hover {
    background: #eeeeee;
  }

  a > section:active {
    background: #f5f5f5;
  }
`;
export const ListItem = styled(Row)`
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.87);
  border-color: #e5e5e5;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;
export const ListItemHeader = styled(ListItem)`
  font-size: 0.7rem;
  color: rgba(0, 0, 0, 0.54);
`;
export const ListItemColumn = styled(Column)`
  padding: 0.5rem 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ListItemColumnCenter = styled(ListItemColumn)`
  text-align: center;
`;

export const Loading = styled.section`
  ${props =>
    props.loading &&
    css`
    filter: blur(1px);
  `};
`;
