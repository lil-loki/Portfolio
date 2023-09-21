import * as allcommands from './commands'

export const commandCompletion = (
    command,
    setCommand,
  ) => {
    const commands = Object.keys(allcommands).filter((entry) =>
      entry.startsWith(command),
    );
  
    if (commands.length === 1) {
      setCommand(commands[0]);
    }
  };