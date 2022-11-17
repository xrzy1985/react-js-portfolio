import './header.scss';
import { useState } from 'react';

export default function Header(props) {
    const [email] = useState('jamespatterson.feswe@yahoo.com');
    const [details] = useState([
        'James Patterson', 'Front End Software Engineer',
        'https://www.linkedin.com/in/james-earl-patterson',
        'https://github.com/xrzy1985',
        `mailto: ${email}`,
    ]);
    return (
        <header>
            <div class="header">
                <h1>{details[0]}</h1>
                <h3>{details[1]}</h3>
                <h5>
                    <a href={details[2]}>LinkedIn</a> | 
                    <a href={details[3]}>GitHub</a> | 
                    <a href={details[4]}>Email</a>
                </h5>
                <div class="profile-photo">
                    <img src={require('../../assets/profile.jpg')}
                        alt="A man named James smiling with short hair and a grin on his face" height="200px" />
                </div>
            </div>
        </header>
    );
}