import styled from 'styled-components'

export const StyledSquare = styled.div`
  width: auto;
 
  background-color: whitesmoke;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  font-size: 3em;
  color: ${props => props.color};
`
