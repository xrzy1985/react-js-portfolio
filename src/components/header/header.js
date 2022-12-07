import './header.scss';
import '../../variables/_variables.scss';
import linkedIn from '../../assets/linkedIn.png';
import github from '../../assets/github.svg';
import email from '../../assets/email.png';
import photo from '../../assets/profile.jpg';
import oil_photo from '../../assets/profile_oil_painting.png';
import react from '../../assets/react.svg';
import html from '../../assets/html.png';
import scss from '../../assets/scss.png';
import js from '../../assets/js.png';
import { useEffect, useState } from 'react';

export default function Header(props) {
    const [alts] = useState(props.state.alts);
    const [changePhoto, setChangePhoto] = useState(false);
    const [links] = useState(props.state.links);
    const [selections] = useState(props.selections);
    const [selected, setSelected] = useState(selections[0]);
    const [selectedCss] = useState({ 'color': 'var(--primary)','textShadow': '1.5px 1px var(--link-shadow)' });
    const [sources] = useState([github, linkedIn, email]);
    const [used] = useState([react, js, html, scss]);
    
    useEffect(() => {
        props.changeContent(selected);
    }, [props, selected]);

    const handleOnMouseOver = (event) => {
        setChangePhoto(changePhoto ? false : true);
    };
    
    return (
        <header className="left-bar">
            <h1 className="wrapper shadow"> James Patterson </h1>
            <img onMouseOver={handleOnMouseOver} onMouseOut={handleOnMouseOver} src={changePhoto ? oil_photo : photo} alt={alts[0]} height="200px"/>
            <h3 className="wrapper shadow"> Software Engineer </h3>
            <div className="links-bar">
                {
                    sources.map((src, i) => {
                        return <a href={links[i]} key={`${src}_${i}`} target="_blank" rel="noopener noreferrer">
                            <img className="img-icons" key={`$img_${i}`} src={src} alt={alts[i + 1]} />
                        </a>
                    })
                }
            </div>
            <hr />
            <div className="paths wrapper">
                {
                    selections.map((s, i) => {
                        return <span className="profile-links" onClick={() => {setSelected(s)}} key={s} style={selected === s ? selectedCss : null }>{s}</span>
                    })
                }
            </div>
            <hr />
            <div className="header-footer">
                <small>Brought to you by</small>
                <span>{ used.map((src, i) => { return <img key={`$img_${i}`} src={src} alt={alts[i + 1]} /> }) }</span>
            </div>
        </header>
    );
}