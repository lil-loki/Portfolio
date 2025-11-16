/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import styled from 'styled-components';

import {ContactsMainContainer,ContactsContainer,ContactsLinks} from '../components/contacts/contact.style';

import {ExperienceTree} from './asciiArt';

import ResumePath from '../assets/Lokesh_Resume_2025.pdf'




 const OutputContainer = styled.div`
    width:50%; 
    font-size:1.2rem;
    padding-left:1%
`;

const OutputTitleContainer = styled.div`
    margin-top:10px;
    margin-bottom:10px;
    font-weight: bold;
    text-decoration: underline double;
`;

const OutputValueContainer = styled.div`
    margin-top:10px;
    margin-bottom:10px;
    display:flex;
    flex-direction:column;

`;

const OutputValue= styled.span`
    margin-top:5px;
    margin-bottom:5px;
`;

// about commands



const Commands = () => {
return`
    'help'       : "You obviously already know what this does",
    'aboutme'    : "Who is Lokesh Sivakumar",
    'skills'     : "View My Skill Sets",
    'contact'    : "links to reach me",
    'experience' : "View My Previous Work Experience",
    'email'      : "Lets Collaborate on Future Projects",
    'linkedin'   : "Lets get Connected", 
    'github'     : "View My GitHub Page"
    'resume'     : "Download My Resume"

Major Linux commands are also supported , Please feel free to try them out.
`;
}

export const help = async (args) => {

    return(
        <pre>
            <Commands></Commands>
        </pre>
    );
};

export const aboutme = async (args) => {
    return(
    <OutputContainer>
    <OutputTitleContainer> ABOUT ME </OutputTitleContainer>
    <OutputValueContainer>
    <OutputValue>
        Hi,I am a Lokesh !👋
    </OutputValue>
    <OutputValue>
        I am a Full-Stack Developer and an Embedded Systems Engineer who builds engaging websites like this one.
    </OutputValue>
    <OutputValue>
        I love Programing and Problem Solving. In My free time I play Video Games,Tinker with Electronics and 3D-Print.
    </OutputValue>
    <OutputValue>
    After graduating with a Bachelor's in Electronics and Communication Engineering ,I am currently working as a Java 
    Full-Stack Developer at LTIMindtree building enterprise web applications.
    </OutputValue>
    </OutputValueContainer>
    </OutputContainer>
    );
};

export const skills = async (args) => {

    const AsciiLoader= styled.span`
        font-family: Georgia;
    `;

    const AsciiLoaderHead= styled.span`
        width:100px;
        display:flex;
    `;

    const AsciiLoaderContainer= styled.ul`
        display:flex;
        flex-direction:column;
    `;

    return (
    <OutputContainer>
    <OutputTitleContainer> SKILLS </OutputTitleContainer>
        <ul>
            <li>
                <OutputTitleContainer>Technical</OutputTitleContainer>
                <ul>
                    <li>HTML,CSS,JavaScript,Java and Python</li>
                    <li>FrontEnd:ReactJS,ReactNative,ElectronJS,Angular and Extjs</li>
                    <li>BackEnd:NodeJS,Springframework,Flask and Django-MVC</li>
                    <li>Database:Oracle,Postgres,MySQL and Mongodb</li>
                    <li>DiscordBots and Rest APIs</li>
                </ul>
            </li>
            <li>
            <OutputTitleContainer>Non Technical</OutputTitleContainer>
                <ul>
                    <li>Chess</li>
                    <li>PCB Designing</li>
                    <li>3D Modeling</li>
                    <li>3D Printing</li>                  
                    <li>Video Editing</li>
                    <li>Gaming</li>
                </ul>
            </li>
            <li>
            <OutputTitleContainer>Knowledge level</OutputTitleContainer>
                <AsciiLoaderContainer>
                    <li><AsciiLoaderHead>HTML   :</AsciiLoaderHead> <AsciiLoader>█████████████████████████████████████████████░░░░░ 90%</AsciiLoader> </li>
                    <li><AsciiLoaderHead>CSS    :</AsciiLoaderHead> <AsciiLoader>█████████████████████████████████████████████░░░░░ 90%</AsciiLoader> </li>
                    <li><AsciiLoaderHead>JS     :</AsciiLoaderHead> <AsciiLoader>███████████████████████████████████████████░░░░░░░ 85%</AsciiLoader> </li>
                    <li><AsciiLoaderHead>React  :</AsciiLoaderHead> <AsciiLoader>███████████████████████████████████████████░░░░░░░ 85%</AsciiLoader> </li>                  
                    <li><AsciiLoaderHead>Angular:</AsciiLoaderHead> <AsciiLoader>████████████████████████████████████████░░░░░░░░░░ 80%</AsciiLoader> </li>
                    <li><AsciiLoaderHead>Java   :</AsciiLoaderHead> <AsciiLoader>████████████████████████████████████████░░░░░░░░░░ 80%</AsciiLoader> </li>
                    <li><AsciiLoaderHead>Python :</AsciiLoaderHead> <AsciiLoader>█████████████████████████████████████████████░░░░░ 90%</AsciiLoader> </li>
                </AsciiLoaderContainer>
            </li>
        </ul>    
    </OutputContainer>
    );
};

export const contact = async (args) => {

    return (
        <OutputContainer>
            <OutputTitleContainer> CONTACT</OutputTitleContainer>
            <OutputValueContainer>
                <OutputValue>
                    Alone we can do so little; together we can do so much.
                </OutputValue>
                <OutputValue>
                     Links you can use to reach me:
                </OutputValue>
                </OutputValueContainer>
            <ContactsContainer>
                <ContactsLinks>Email ---{'>'}{'>'} <a href='mailto:lokesh.sivakumar@gmail.com'>lokesh.sivakumar@gmail.com</a></ContactsLinks>
                <ContactsLinks>GitHub ---{'>'}{'>'} <a href='https://github.com/lil-loki'>github/lil-loki</a></ContactsLinks>
                <ContactsLinks>Linkedin ---{'>'}{'>'} <a href='https://linkedin.com/in/lokesh-sivakumar-921133155/'>Linkedin/Lokesh.S</a></ContactsLinks>
            </ContactsContainer>
        </OutputContainer>
    );
};

export const experience = async (args) => {
    const TreeContainer= styled.pre`
        font-size:1.2rem;
    `;
    return (
        <OutputContainer>
            <OutputTitleContainer> Work Experience</OutputTitleContainer>
            <TreeContainer>            
                <ExperienceTree/>
            </TreeContainer>
        </OutputContainer>
    );
};

export const email = async (args) => {
    window.open('mailto:lokesh.sivakumar@gmail.com  ', '_blank')
    return `Opening Email`;
}; 

export const linkedin = async (args) => {
    window.open('https://linkedin.com/in/lokesh-sivakumar-921133155/', '_blank')
    return `Opening Linkedin`;
}; 

export const github = async (args) => {
    window.open('https://github.com/lil-loki', '_blank')
    return `Opening Git-Hub`;
};

export const resume = async (args) => {
    const pdfUrl = ResumePath;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Lokesh_Resume.pdf'; 
    link.target = '_blank';
    link.click();
    window.open(pdfUrl, '_blank');
    return `Downloading Resume`;
};


// linux commands
export const echo = async (args) => {
    return args.join(' ');
};
  
export const whoami = async (args) => {
    return `Lokesh Sivakumar`;
};
  
export const ls = async (args) => {
    return `a bunch of fake directories`;
};

export const cd = async (args) => {
    return `Can not change Directory!!!! Sorry I am Lost`;
};
  
export const date = async (args) => {
    return new Date().toString();
};
  
export const vi = async (args) => {
    return `woah, you still use 'vi'? just try 'vim'.`;
};
  
export const vim = async (args) => {
    return `'vim' is  outdated. how about 'notepad'?`;
};

export const notepad = async (args) => {
    return `'notepad' is very boring . Start using the best tool for coding : 'MSWord' `;
};

export const msword = async (args) => {
    return `'MSWord' Seriously??? Please start using Vscode Editor `;
};

/* export const ipconfig = async (args) => {
    return ipdetails;
}; */

export const sudo = async (args) => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); 
    return `Ha Ha Ha Got You!!!!! `;
};

export const mkdir = async (args) => { 
    return `unfortunately, i don't have space for more directories `;
};

export const rmdir = async (args) => { 
    return `Admin Privilege Required, Try 'Sudo' Command`;
};

export const pwd = async (args) => { 
    return `C:Users/Lokesh/Resume`;
};

/* const ipdetails =""; */