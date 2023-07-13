// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

export default function GradientDirectionItem(props) {
  const {directionDetails, onSelectDirection, isActive} = props
  const {displayText, value} = directionDetails

  return (
    <ListItem>
      <DirectionButton
        type="button"
        isActive={isActive}
        onClick={() => onSelectDirection(value)}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
