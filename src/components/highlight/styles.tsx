import styled from "styled-components";

export const H1 = styled.h1`
    font-size: 17px;
    border: 500;
    margin: 5px 0;
`

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  &::-webkit-scrollbar { height: 0 !important;width:0px !important; }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;

export const Preview = styled.div`
  height: 100%;
  flex: 1;
  padding-left: 10px;
`

export const PreviewContainer = styled.div`
  display: flex;
  height: 600px;
  border: none !important;
  &::-webkit-scrollbar { height: 0 !important;width:0px !important; }
`

export const Editor = styled.div`
  overflow: 'scroll';
  flex: 0 0 50%;
`