import {useState} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainAppContainer,
  AppContainer,
  MainHeading,
  Heading,
  Input,
  InputsContainer,
  InputWrapper,
  InputValue,
  GenerateGradientButton,
  DirectionsList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

export default function GradientGenerator() {
  const [gradientValue, setGradientValue] = useState(
    `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  )

  const [gradientValues, setGradientValues] = useState({
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
  })

  const handleOnChangeValues = event => {
    const {name, value} = event.target
    setGradientValues(prevValues => ({...prevValues, [name]: value}))
  }

  const onSelectDirection = value => {
    setGradientValues(prevValues => ({
      ...prevValues,
      activeDirection: value,
    }))
  }

  const onApplyChanges = () => {
    const {activeDirection, color1, color2} = gradientValues
    setGradientValue(`to ${activeDirection}, ${color1}, ${color2}`)
  }

  return (
    <MainAppContainer
      data-testid="gradientGenerator"
      gradientValue={gradientValue}
    >
      <AppContainer>
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <Heading>Choose Direction</Heading>
        <DirectionsList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              onSelectDirection={onSelectDirection}
              isActive={gradientValues.activeDirection === each.value}
            />
          ))}
        </DirectionsList>
        <Heading>Pick the Colors</Heading>
        <InputsContainer>
          <InputWrapper>
            <InputValue>{gradientValues.color1}</InputValue>
            <Input
              type="color"
              name="color1"
              value={gradientValues.color1}
              onChange={handleOnChangeValues}
            />
          </InputWrapper>
          <InputWrapper>
            <InputValue>{gradientValues.color2}</InputValue>
            <Input
              type="color"
              name="color2"
              value={gradientValues.color2}
              onChange={handleOnChangeValues}
            />
          </InputWrapper>
        </InputsContainer>
        <GenerateGradientButton onClick={onApplyChanges}>
          Generate
        </GenerateGradientButton>
      </AppContainer>
    </MainAppContainer>
  )
}
