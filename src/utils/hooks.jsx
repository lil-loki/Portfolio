import { useState } from 'react'; 

export const useCommandHistory = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [command, setCommand] = useState('');
  const [lastCommandIndex, setLastCommandIndex] =useState(0);

  return {
    commandHistory,
    command,
    lastCommandIndex,
    setCommandHistory: (value) =>
    setCommandHistory([
        ...commandHistory,
        {
          id: commandHistory.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    clearCommandHistory: () => setCommandHistory([]),
  };
}

