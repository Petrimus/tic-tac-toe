import styled from 'styled-components'

export const StyledGrid = styled.div`
  min-width: 300px;
  min-height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);   
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  background-color: black;
  overflow: hidden;
`

/*
width: 400px;
  height: 400px;


*/