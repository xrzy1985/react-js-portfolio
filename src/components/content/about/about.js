import './about.scss';
import { useState } from 'react';

export default function About(props) {

    const [state] = useState(props.state.about);

    return (
        <section className="about-section">
            <h1 className="header">Greetings</h1>
            <span className="paragraph">{state.greeting}</span>
            <h1 className="header">Interests</h1>
            <span className="paragraph">{state.interests}</span>
            <h1 className="header">Goals</h1>
            <span>{state.goals}</span>
            <h1 className="header">Final Thoughts</h1>
            <span className="paragraph">{state.final}</span>
        </section>
    );
}