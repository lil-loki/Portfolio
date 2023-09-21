/* eslint-disable react/prop-types */
import{InputContainer,CommandInputMainContainer} from './input.styles'

import {commandCompletion} from '../../utils/commandCompletion'
import cmdValidator from '../../utils/cmdValidator';
import Prompt from '../Prompt/prompt.component';


export default function Input({
    inputRef,
    command,
    commandHistory,
    lastCommandIndex,
    setCommand,
    setCommandHistory,
    setLastCommandIndex,
    clearCommandHistory,
    }) {

  
    const handleChange = async (e) => {
        setCommand(e.target.value)
    }
  
  
    const handleSubmit = async (e) => {       

        const commands= commandHistory
        .map(({ command }) => command)
        .filter((command) => command);

        if (e.key === 'Enter' || e.code === '13') {
            e.preventDefault();
            await cmdValidator(command,setCommand,setCommandHistory,clearCommandHistory);
        }
        if (e.key === 'c' && e.ctrlKey) {
            e.preventDefault();
            setCommand('');
            setCommandHistory('');
            setLastCommandIndex(0);
          }
        if (e.key === 'l' && e.ctrlKey) {
            e.preventDefault();
            clearCommandHistory();
        }
        if (e.key === 'Tab') {
            e.preventDefault();
            commandCompletion(command, setCommand);
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (!commands.length) {
              return;
            }
            const index = lastCommandIndex + 1;
            if (index <= commands.length) {
              setLastCommandIndex(index);
              setCommand(commands[commands.length - index]);
            }
          }
      
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (!commands.length) {
              return;
            }
            const index = lastCommandIndex - 1;
            if (index > 0) {
              setLastCommandIndex(index);
              setCommand(commands[commands.length - index]);
            } else {
              setLastCommandIndex(0);
              setCommand('');
            }
          }

    }

  return (
    <CommandInputMainContainer>
        <Prompt />
        <InputContainer 
            type="text"
            ref={inputRef}
            value={command} 
            onChange={handleChange}
            onKeyDown={handleSubmit}    
            autoComplete="off"
            spellCheck="false"
            autoFocus
        />
    </CommandInputMainContainer>

  )  
}

