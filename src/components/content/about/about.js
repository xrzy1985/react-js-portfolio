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
            programming. The first time I made a computer print out, Hello World, I was hooked.
            I try to take at least one hour everyday to strengthen my skills. I try to focus on 
            the fundamentals, such as es6, built in methods, and scoping. I also try to learn at 
            least one new concept within frameworks, such as how to use modules in angular, how 
            use additional operators with rxjs, or a new hook in react.`,
        goals: `I want to obtain a job that is within an organization that invests as much into their employees 
            as the employee invests into the company. The primary goal I have is to continue growing through 
            experience. I can easily pick up new frame works and concepts. So, I am less concerned with 
            the tech stack I end up using, and more focused on the team I would join. I would like to gear my 
            career more towards the full stack territory, but I am generally open to any work that offers growth.`,
        final: `I would be a good fit in a company who values hard work, integrity, and loyalty to the product. 
            I take ownership of any application I am working on, because that is a reflection of myself.`
    });

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