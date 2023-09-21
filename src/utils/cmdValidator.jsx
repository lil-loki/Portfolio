import * as commands from './commands'

export default async function cmdValidator(command,setCommand,setCommandHistory,clearCommandHistory) {

    const args = command.split(' ');
    args[0] = args[0].toLowerCase();

    await setCommandHistory(command);
    await setCommand(''); 

    if(args[0] === ''){
        setCommandHistory('');
    }
    else if (args[0] === 'clear') {
        clearCommandHistory();
    }
    else if(Object.keys(commands).indexOf(args[0])===-1){
        setCommandHistory(`command ${args[0]} not found. Please use command 'help' to get a list of available commands.`);
    }
    else{
        const output= await commands[args[0]](args.slice(1));
        setCommandHistory(output);
    }




}



  