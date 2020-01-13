import styled from 'styled-components'

export const StyledSquare = styled.div`
  width: auto;  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: rgba(245, 245, 245, 0.8);  
  font-size: 3em;
  color: ${props => props.color};
  border: 5px solid;
  border-bottom-color: rgba(245, 245, 245, 0.5);
  border-right-color: rgba(245, 245, 245, 0.5);
  border-top-color: rgba(245, 245, 245, 0.5);
  border-left-color: rgba(245, 245, 245, 0.5);

`
