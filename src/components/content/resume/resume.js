import './resume.scss';
import doc from '../../../assets/resumes/doc-icon.png';
import docx from '../../../assets/resumes/docx-icon.png';
import pdf from '../../../assets/resumes/pdf-icon.png';
import img from '../../../assets/resumes/resume.jpg';
import { useState } from 'react';

export default function Resume(props) {
    const [srcs] = useState([doc, docx, pdf]);
    const [state] = useState({
        path: props.state.path,
        links: props.state.links.map((link, i) => { return { ...link, src: srcs[i] }; })
    });
    return (
        <section className="resume">
            <h1 className="header">{props.state.resumeHeader}</h1>
            <section className="links">
                {
                    state.links.map((link, index) => {
                        return <span key={`resume_span_${index}`}>
                            <a href={process.env.PUBLIC_URL + `${state.path}${link.path}`}
                                download rel="noreferrer" target="_blank" key={`resume_${index}`}>
                                <img src={link.src} alt={link.alt} key={`resume_img_${index}`}/>
                            </a>
                        </span>
                    })
                }
            </section>
            <section className="img-container">
                <img src={img} alt={props.state.resumeAlt} />
            </section>
        </section>
    );
}