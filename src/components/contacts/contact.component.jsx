import {ContactsMainContainer,ContactsContainer,ContactsLinks} from './contact.style'

import ResumePath from '../../../public/Lokesh_ Resume.pdf'

export default function Contacts() {
  function handleDownload(){
    const pdfUrl = ResumePath;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Lokesh_Resume.pdf'; 
    link.target = '_blank';
    link.click();
    window.open(pdfUrl, '_blank');
  }
  return (
    <ContactsMainContainer>
        <ContactsContainer>
            <ContactsLinks>Resume ---{'>'}{'>'} <a onClick={handleDownload} href='#'>Download Resume</a></ContactsLinks>
            <ContactsLinks>Email ---{'>'}{'>'} <a href='mailto:lokesh.sivakumar@gmail.com'>lokesh.sivakumar@gmail.com</a></ContactsLinks>
            <ContactsLinks>GitHub ---{'>'}{'>'} <a href='https://github.com/lil-loki'>github/lil-loki</a></ContactsLinks>
            <ContactsLinks>Linkedin ---{'>'}{'>'} <a href='https://linkedin.com/in/lokesh-sivakumar-921133155/'>Linkedin/Lokesh.S</a></ContactsLinks>
        </ContactsContainer>
    </ContactsMainContainer>
  )
}
