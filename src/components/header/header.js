import './header.scss';
import '../../variables/_variables.scss';
import linkedIn from '../../assets/linkedIn.png';
import github from '../../assets/github.svg';
import email from '../../assets/email.png';
import photo from '../../assets/profile.jpg';
import react from '../../assets/react.svg';
import html from '../../assets/html.png';
import scss from '../../assets/scss.png';
import js from '../../assets/js.png';
import { useEffect, useState } from 'react';

export default function Header(props) {
    const [alts] = useState([
        'A man named James smiling with short hair and a grin on his face',
        'linked in profile link',
        'A link to email James\' directly',
        'github link to James\' repositories']);
    const [links] = useState([
        'https://github.com/xrzy1985',
        'https://www.linkedin.com/in/james-earl-patterson',
        'mailto:jamespatterson.feswe@yahoo.com',
        '../../assets/profile.jpg']);
    const [selections] = useState(props.selections);
    const [selected, setSelected] = useState(selections[0]);
    const [selectedCss] = useState({ 'color': 'var(--primary)','textShadow': '1.5px 1px var(--link-shadow)' });
    const [sources] = useState([github, linkedIn, email]);
    const [used] = useState([react, js, html, scss]);
    
    useEffect(() => {
        props.changeContent(selected);
    }, [props, selected]);
    
    return (
        <header className="left-bar">
            <h1 className="wrapper shadow"> James Patterson </h1>
            <img src={photo} alt={alts[0]} height="200px"/>
            <h3 className="wrapper shadow">Front End Software Engineer</h3>
            <div className="links-bar">
                {
                    sources.map((src, i) => {
                        return <a href={links[i]} key={`${src}_${i}`}><img key={`$img_${i}`} src={src} alt={alts[i + 1]} /></a>
                    })
                }
            </div>
            <div className="paths wrapper">
                {
                    selections.map((s, i) => {
                        return <span onClick={() => {setSelected(s)}} key={s} style={selected === s ? selectedCss : null }>{s}</span>
                    })
                }
            </div>
            <div className="header-footer">
                <small>Brought to you by</small>
                <br/>
                <span>{ used.map((src, i) => { return <img key={`$img_${i}`} src={src} alt={alts[i + 1]} /> }) }</span>
            </div>
        </header>
    );
}