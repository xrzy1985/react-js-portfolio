import './about.scss';
import { useState } from 'react';

export default function About(props) {
    const [state] = useState({
        greeting: `Good day, I hope you're doing well when you find yourself reading this section. 
            When I first graduated high school, I attempted to start my college career; the 
            result from that experience was not great. I would need to grow up and learn 
            the value of hard work before I could think about starting again. Eventually, I 
            would restart and find myself back at Dalton State College, and graduating with 
            an A.S. in computer science. Furthering my degree path would take me to Marietta 
            where I would attend Southern Polytechnic State University to start working on 
            a B.S. in computer science. SPSU was eventually merged with Kennesaw State 
            University, and that is how I became a KSU student. I graduated from Kennesaw 
            State University's College of Computing and Software Engineering with a 3.71 GPA 
            majoring in computer science.`,
        interests: `What are some of my hobbies and interests? I love to be outdoors; hiking, 
            biking, walking, etc. When I can, I always go down to the local park to get a few miles 
            under the sun. My dog and I enjoy hiking along the Ocoee river towards Tennessee. 
            I am a avid video game player, and a even larger collector of physical games. I love to 
            play music on my guitar or mandolin, especially blues. Finally, I do really enjoy 
            programming. The first time I made a computer print out, Hello World, I was hooked.`,
        current: `I am currently working as a front end engineer migrating a legacy AngularJS 
            application to a newer version of Angular, 14. The role is an on going contract position
            without a clear defined end in sight. I am utilizing skills I have previous gained from
            past employers, while learning new skills to add to the tool belt.`,
        experience: `I have worked primarily as a front end software engineer since the inception of
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
            primary functions there were to write reusable components for our various React projects, 
            implement new features within various mobile projects, and general bug fixes across several teams.
            `,
        goals: `I want to obtain a job that is within an organization that invests as much into their employees 
            as the employee invests into the company. The primary goal I have is to continue growing through 
            experience. I can easily pick up new frame works and concepts. So, I am less concerned with 
            the tech stack I end up using, and more focused on the team I would join. I would like to gear my 
            career more towards the full stack territory, but I am generally open to any work that offers growth.`,
        tech: `Javascript, Typescript, NodeJs, CSS, SCSS, RxJs, Angular Js, Angular 6+, ReactJs, Java | 
            Desktop, Hybrid, and Mobile utilizing response web design | VS Code, Microsoft Office Suite, PC, Mac`,
        final: `I would be a good fit in a company who values hard work, integrity, and loyalty to the product. 
            I take ownership of any application I am working on, because that is a reflection of myself.`
    });

    return (
        <section className="about-section">
            <h1>Greetings</h1>
            <span>{state.greeting}</span>
            <h1>Interests</h1>
            <span>{state.interests}</span>
            <h1>Current Role</h1>
            <span>{state.current}</span>
            <h1>Experience</h1>
            <span>{state.experience}</span>
            <h1>Goals</h1>
            <span>{state.goals}</span>
            <h1>Technologies</h1>
            <span>{state.tech}</span>
            <h1>Final Thoughts</h1>
            <span>{state.final}</span>
        </section>
    );
}