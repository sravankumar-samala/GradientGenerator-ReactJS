// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li``

export const DirectionButton = styled.button`
  padding: 0.5em 1.7em;
  background-color: #ededed;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  color: black;
  font-size: 1rem;
  border-radius: 7px;
  cursor: pointer;
  transition: all 0.15s linear;
`
