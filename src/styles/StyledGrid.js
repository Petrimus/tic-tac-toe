import styled from 'styled-components'

export const StyledGrid = styled.div`
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  background-color: black;
  overflow: hidden;
`