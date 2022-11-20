import './main.scss';
import About from '../content/about/about';
import Header from '../header/header';
import WorkExperience from '../content/work/work';
import Resume from '../content/resume/resume';
import { useState } from 'react';

export default function Main(props) {
    const [selections] = useState(props.state.selections);
    const [selected, setSelected] = useState(selections[0]);

    const changeContent = (content) => setSelected(content);

    const getComponent = () => {
        switch (selected) {
            case selections[0]:
                return <About selected={selected} state={props.state}/>
            case selections[1]:
                return <Resume selected={selected} state={props.state}/>
            case selections[2]:
                return <WorkExperience selected={selected} state={props.state}/>
            default:
                return null
        }
    };

    return (
        <main className="main">
            <Header changeContent={changeContent} selections={selections} state={props.state.header}/>
            <div className="content">
                { getComponent() }
            </div>
        </main>
    );
}