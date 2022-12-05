import './projects.scss';
import { useState } from 'react';

export default function Projects(props) {
    const [headings] = useState(props.state.Projects[0].details);
    const [types] = useState(props.state.Projects[0].type);
    const [backEndProjects] = useState(props.state.Projects[0].professional.back);
    const [frontEndProjects] = useState(props.state.Projects[0].professional.front);

    return (
        <section className="projects-section">
            <h1 className="header">{headings.professional}</h1>
            <h2 className="header">{types[0]}</h2>
            <span className="paragraph">{frontEndProjects[0]}</span>
            <br />
            <span className="paragraph">{frontEndProjects[1]}</span>
            <br />
            <span className="paragraph">{frontEndProjects[2]}</span>
            <br/>
            <h2 className="header">{types[1]}</h2>
            <span className="paragraph">{backEndProjects[0]}</span>
            <br />
            <span className="paragraph">{backEndProjects[1]}</span>
            <h1 className="header">{headings.independent}</h1>
            <span>Will be added soon</span>
            {/* <span className="paragraph">projects</span> */}
        </section>
    );
}