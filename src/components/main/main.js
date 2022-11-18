import './main.scss';
import linkedIn from '../../assets/linkedIn.svg';
import github from '../../assets/github.svg';
import email from '../../assets/email.png';
import { useState } from 'react';

export default function Main(props) {
    const [selections] = useState(['About', 'Goals', 'Work History']);
    const [selected, setSelected] = useState(selections[0]);
    const [selectedCss] = useState({'color': '#2A5B44'});

    return (
        <div className="main">
            <div className="left-bar">
                <h1 className="wrapper"> James Patterson </h1>
                <img src={require('../../assets/profile.jpg')}
                    alt="A man named James smiling with short hair and a grin on his face" height="200px"/>
                <h3 class="wrapper">Front End Software Engineer</h3>
                <div className="links-bar">
                    <a href="https://www.linkedin.com/in/james-earl-patterson">
                        <img src={linkedIn} alt="linked in profile link" />
                    </a>
                    <a href="https://github.com/xrzy1985">
                        <img src={github} alt="github link to James' repositories" />
                    </a>
                    <a href="mailto:jamespatterson.feswe@yahoo.com">
                        <img src={email} alt="A link to email James' directly" />
                    </a>
                </div>
                <div className="paths wrapper">
                    <span onClick={ () => { setSelected(selections[0]); }} style={ selected === selections[0] ? selectedCss : null }>
                        About Me
                    </span>
                    <span onClick={ () => { setSelected(selections[1]); }} style={ selected === selections[1] ? selectedCss : null }>
                        Goals
                    </span>
                    <span onClick={ () => { setSelected(selections[2]); }} style={ selected === selections[2] ? selectedCss : null }>
                        Work History
                    </span>
                </div>
            </div>
            <div style={{ 'height': '100%', 'width': '75vw', 'overflow': 'auto' }}>
                { selected === selections[0] ? <span>{selections[0]}</span> :
                    selected === selections[1] ? <span>{selections[1]}</span> : <span>{selections[2]}</span>}
            </div>
        </div>
    );
}