// Style your elements here
import styled from 'styled-components'

export const GradientItem = styled.li`
  padding: 0.5em 1.7em;
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: black;
  font-size: 1rem;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.15s linear;
`
