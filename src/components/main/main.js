import './main.scss';
import About from '../content/about/about';
import Header from '../header/header';
import { useState } from 'react';

export default function Main(props) {
    const [selections] = useState(props.selections);
    const [selected, setSelected] = useState(selections[0]);

    const changeContent = (content) => setSelected(content);

    const getComponent = () => {
        switch (selected) {
            case selections[0]:
                return <About selected={selected}/>
            case selections[1]:
                return <span>{selections[1]}</span>
            case selections[2]:
                return <span>{selections[2]}</span>
            case selections[3]:
                return <span>{selections[3]}</span>
            case selections[4]:
                return <div style={{'display': 'flex', 'flexDirection': 'column'}}>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>span</p>
                <p>last</p>
            </div>
            default:
                return null
        }
    };

    return (
        <main className="main">
            <Header selections={selections} changeContent={changeContent}/>
            <div className="content">
                { getComponent() }
            </div>
        </main>
    );
}