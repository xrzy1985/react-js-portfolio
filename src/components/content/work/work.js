import './work.scss';
import { useState } from 'react';

export default function WorkExperience(props) {
    const [work] = useState([
        { header: 'Current Role', details: `I am currently working as a front end engineer migrating a legacy AngularJS 
            application to a newer version of Angular, 14. The role is an on going contract position
            without a clear defined end in sight. I am utilizing skills I have previous gained from
            past employers, while learning new skills to add to the tool belt.`},
        { header: 'Experience', details: `I have worked primarily as a front end software engineer since the inception of
            my career. My first job I was apart of a full stack dev ops team. I had a few back end 
            micro services that I maintained; building out new services, adding new tables to the 
            database, normalize the data, and all of the previous functionality was within a Java spring
            boot application. The majority of the work I was apart of was focusing on the front end.
            At Amdocs, I built out an Angular application to give some of the C level staff at certain 
            telecommunications companies full CRUD processes over a global database. The application used 
            version 8, angular material, rxjs, and we built out a node js middle layer to manipulate the 
            data coming from the back end, in order to minimize the manipulation on the front end side. 
            Before I left we finalized a read only application in React Js, to give the same C level 
            staff the ability to easily log in, and gather important details needed on their phones. The 
            application was primarily built with mobile in mind, even though it was scalable to a 
            full desktop view. I received a call one day from a recruiter for Tillster. The job was working 
            within an angular js space. I thought the job would be a challenge, going from typescript to 
            javascript and it was, at first, but everything is hard until it isn't. I decided to join 
            the team because I would be working with a great group of people that were humble, genuine, and most 
            importantly, smarter than me. I wanted to be apart of a team that would help me grow, and 
            they definitely did that. At Tillster, I worked primarily on a call center application. The 
            application was a desktop application that allowed people to call into a call center, place 
            orders from various clients, and receive the food from various disposition types, such as 
            delivery, pickup, curbside, etc. The first year I worked at Tillster, the primary goal was to 
            get the application into a good end to end state, no failing apis, no breaking flows, etc. After 
            that was achieved, the second year was focused on implementing new features for current and onboarding 
            clients, and redesign of the older features. The third year was to be focused on re-implementing 
            that application in a newer version of Angular due to Angular Js' TLS period. The company decided 
            to take a different direction, and focus on all new development being in React. Before I left, my 
            primary functions were to write reusable components for our various React projects, implement new 
            features within various mobile projects, and general bug fixes across several teams, mobile and hybrid.
            `},
        { header: 'Technologies', details: [
            `Desktop, Hybrid, and Mobile applications that utilize responsive web design`,
            `Angular Js, Angular 8 - Current, ReactJs, NodeJs, Spring Boot`,
            `Javascript, Typescript, CSS, SCSS, RxJs, Java, SQL`,
            `VS Code, Microsoft Office Suite, PC, Mac`,
        ]}
    ]);

    return (
        <section className="work-section">
            {
                work.map((experience, index) => {
                    return <div key={`experience_${index}`}>
                            <h1>{experience.header}</h1>
                            { 
                                !Array.isArray(experience.details) ? <span>{experience.details}</span> :
                                <div className="tech">
                                    {
                                        experience.details.map((t, i) => {
                                            return <span key={i}>
                                                {
                                                    i > 0 ? <span className="mobile"> | </span> : null
                                                }
                                                <span>{t}</span>
                                            </span>
                                        })
                                    }
                                </div>
                            }
                        </div>
                    }
                )
            }
        </section>
    );
}