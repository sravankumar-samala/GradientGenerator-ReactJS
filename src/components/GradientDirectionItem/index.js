// Write your code here
import {GradientItem} from './styledComponents'

export default function GradientDirectionItem(props) {
  const {directionDetails, onSelectDirection, isActive} = props
  const {displayText} = directionDetails
  //   console.log(isActive)

  return (
    <GradientItem
      onClick={() => onSelectDirection(directionDetails)}
      isActive={isActive}
    >
      <button type="button">{displayText}</button>
    </GradientItem>
  )
}
