// Style your elements here
import styled from 'styled-components'

const neutralWhite = '#e2f1ff'
const colorH2 = ' #ffffff79'
const colorDark = '#1e293b'

export const MainAppContainer = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1em;
  background-image: linear-gradient(${props => props.gradientValue});
  color: ${neutralWhite};
`

export const AppContainer = styled.div`
  display: grid;
  place-items: center;
`

export const MainHeading = styled.h1`
  font-size: clamp(1.7rem, 4vw, 2.5rem);
`

export const Heading = styled.p`
  font-size: clamp(0.8rem, 2.7vw, 1.7rem);
  color: ${colorH2};
  font-weight: normal;
`

export const DirectionsList = styled.ul`
  display: flex;
  gap: 1em;
  align-items: center;
  justify-content: center;
`

// Color inputs
export const InputsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1em;
`

export const InputWrapper = styled.div`
  display: grid;
  place-items: center;
`
export const InputValue = styled.p`
  color: ${neutralWhite};
`

export const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;

  aspect-ratio: 3/2;
  width: 60px;
  cursor: pointer;
  border-radius: 50%;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
    border-radius: 5px;
  }
`

export const GenerateGradientButton = styled.button`
  border: none;
  outline: none;
  background-color: #00c9b7;
  color: ${colorDark};
  padding: 0.5em 1.2em;
  font-size: 1.1rem;
  border-radius: 5px;
  box-shadow: 4px 4px 16px 0px #0000002e;
  margin: 2em 0;
  cursor: pointer;
`
