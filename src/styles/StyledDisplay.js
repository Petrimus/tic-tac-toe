import styled from 'styled-components'


export const StyledDisplay = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 10px;
  text-align: center;
`

export const DisplayText = styled.p`
  font-size: 20px;
  font-weight: 700;
`

export const Button = styled.button`
  visibility: ${props => props.visibility};  
  border: none;
  
  margin-top: 10px;
  text-decoration: none;
  color: palevioletred;
  background: none;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: color 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;

&:hover {
    color: blueviolet;
}

`