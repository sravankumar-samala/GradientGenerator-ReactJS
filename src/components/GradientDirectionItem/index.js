// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

export default function GradientDirectionItem(props) {
  const {directionDetails, onSelectDirection, isActive} = props
  const {displayText} = directionDetails
  //   console.log(isActive)

  return (
    <ListItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={() => onSelectDirection(directionDetails)}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
