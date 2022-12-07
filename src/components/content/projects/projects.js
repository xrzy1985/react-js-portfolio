import './projects.scss';
import asp from '../../../assets/restaurant_api.png';
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
            {
                frontEndProjects.map((f, i) => {
                    return <span className="paragraph" key={`${f}_${i}`}>{frontEndProjects[i]}</span>
                })
            }
            <h2 className="header">{types[1]}</h2>
            {
                backEndProjects.map((b, i) => {
                    return <span className="paragraph" key={`${b}_${i}`}>{backEndProjects[i]}</span>
                })
            }
            <h1 className="header">{headings.independent}</h1>
            <section className="independent">
                <div className="project-details">
                    <span>C# ASP.Net Core</span>
                    <span>SQL Server</span>
                    <span><a href="https://github.com/xrzy1985/Restaurant_API">Github Link</a></span>
                    <span>A back end rest microservice built out to mimic the typical crud operations performed by most restaurant applications.</span>
                </div>
                <img className="project" src={asp} alt="A back end micro service running within a chrome browser via swagger" />
            </section>
            <span>More too come..</span>
        </section>
    );
}