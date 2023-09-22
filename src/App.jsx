/* eslint-disable no-unused-vars */
import {useRef,useEffect} from 'react';
import MediaQuery from 'react-responsive';

import Input from './components/Input/Input.component';
import CommandHistory from './components/CommandHistory/CommandHistory.component';
import Contacts from './components/contacts/contact.component';
import MobileView from './components/MobileView/mobileView.component';

import {IntroArt,ProfilePhoto} from './utils/asciiArt';
import {useCommandHistory} from './utils/hooks'

import {MainContainer,IntroContainer,ProfilePhotoContainer,ProfilePhotoPre,NameContainer,ComandContainer,ContactContainer} from './App.styles'

function App() {

  const inputRef = useRef(null);

  const onClickAnywhere = () => {
    inputRef.current.focus();
  };

  const {
    commandHistory,
    command,
    lastCommandIndex,
    setCommand,
    setCommandHistory,
    clearCommandHistory,
    setLastCommandIndex,
  } = useCommandHistory([]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
  }, [commandHistory]);



  return (
    <>
      <MediaQuery minWidth={800}>
        <MainContainer onClick={onClickAnywhere}>
          <IntroContainer>
            <ProfilePhotoContainer>
              <ProfilePhotoPre>
                <ProfilePhoto/>
              </ProfilePhotoPre>          
            </ProfilePhotoContainer>
            <NameContainer>        
              <IntroArt/>
            </NameContainer>
            {/* <ContactContainer>
              <Contacts/>
            </ContactContainer> */}
          </IntroContainer>
          <ComandContainer>
            <CommandHistory commandHistory ={commandHistory} />
            <br></br>
            <Input
              inputRef={inputRef}
              command={command}
              commandHistory={commandHistory}
              setCommand={setCommand}
              setCommandHistory={setCommandHistory}
              setLastCommandIndex={setLastCommandIndex}
              clearCommandHistory={clearCommandHistory} 
              lastCommandIndex={lastCommandIndex}
            />
          </ComandContainer>
        </MainContainer>
      </MediaQuery>
      <MediaQuery maxWidth={800}>
          <MobileView />
      </MediaQuery>
    </>
  );
}

export default App;
