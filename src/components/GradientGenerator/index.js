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
  const [activeDirection, setActiveDirection] = useState(
    gradientDirectionsList[0].directionId,
  )
  const [applyChanges, setApplyChanges] = useState(false)
  const [gradientValues, setGradientValues] = useState({
    gradientDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
  })

  const handleOnChangeValues = event => {
    setApplyChanges(false)
    const {name, value} = event.target
    setGradientValues(prevValues => ({...prevValues, [name]: value}))
  }

  const onSelectDirection = details => {
    setApplyChanges(false)
    setActiveDirection(details.directionId)
    setGradientValues(prevValues => ({
      ...prevValues,
      gradientDirection: details.value,
    }))
  }

  const onApplyChanges = () => {
    setApplyChanges(true)
  }

  return (
    <MainAppContainer
      data-testid="gradientGenerator"
      color1={applyChanges && gradientValues.color1}
      color2={applyChanges && gradientValues.color2}
      direction={`to ${applyChanges && gradientValues.gradientDirection}`}
      applyChanges={applyChanges}
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
              isActive={activeDirection === each.directionId}
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
