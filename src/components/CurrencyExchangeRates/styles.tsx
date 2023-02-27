import styled from "styled-components";

export const StyledTr = styled.tr`
  height: 28px;

  Th:first-child,
  Td:first-child {
    padding-left: 20px;
  }
`;

export const StyledTh = styled.th`
  padding: 8px;
  width: 20%;
  display: table-cell;
  text-align: start;
  background-color: #E5E5E5;
`;

export const StyledTable = styled.table`
  width: 100%;
  display: table;
  border-collapse: collapse;
  border-spacing: 0;

  Tr:nth-child(even) {
    background-color: #FAFAFA;
  }
`;

export const StyledTableWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  display: block;
  overflow-x: auto;
  max-width: 700px;
`;

export const StyledTd = styled.td`
  padding: 8px;
  display: table-cell;
  width: 20%;
  text-align: start;
`;




