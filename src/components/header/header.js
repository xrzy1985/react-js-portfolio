import './header.scss';
import linkedIn from '../../assets/linkedIn.png';
import github from '../../assets/github.svg';
import email from '../../assets/email.png';
import photo from '../../assets/profile.jpg';
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
    const [selectedCss] = useState({ 'color': '#2A5B44','textShadow': '1px 1px #E3E3E3' });
    const [sources] = useState([github, linkedIn, email]);
    
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
        </header>
    );
}