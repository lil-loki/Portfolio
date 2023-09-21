/* eslint-disable react/prop-types */

import{CommandHistoryMainContainer,CommandHistoryContainer,CommandContainer} from './CommandHistory.styles'
import Prompt from '../Prompt/prompt.component'

export default function CommandHistory({commandHistory}) {
  return (
    <CommandHistoryMainContainer>
      {commandHistory.map((entry, index) => (
        <CommandHistoryContainer key={entry.command + index}>
            <CommandContainer>
                <Prompt />
                {entry.command}
            </CommandContainer>
            {entry.output}  
        </CommandHistoryContainer>
      ))}
    </CommandHistoryMainContainer>
  )
}
