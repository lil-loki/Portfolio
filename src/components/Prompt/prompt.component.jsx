import{PromptContainer,PromptNameContainer,PromptSymbolContainer,PromptDomainContainer} from './prompt.styles'

export default function Prompt() {
  return (
    <PromptContainer>
      <PromptNameContainer>
        lokesh
      </PromptNameContainer>
      <PromptSymbolContainer >@</PromptSymbolContainer>
      <PromptDomainContainer>
        resume.com
      </PromptDomainContainer>
      <PromptSymbolContainer>:$ ~ </PromptSymbolContainer>
    </PromptContainer>
  )
}
