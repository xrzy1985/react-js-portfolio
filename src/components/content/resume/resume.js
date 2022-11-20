import './resume.scss';
import doc from '../../../assets/resumes/doc-icon.png';
import docx from '../../../assets/resumes/docx-icon.png';
import pdf from '../../../assets/resumes/pdf-icon.png';
import img from '../../../assets/resumes/resume.jpg';
import { useState } from 'react';

export default function Resume(props) {
    const [state] = useState({
        path: '/resumes/',
        links: [
            { alt: 'A download for James\'s resume in doc format', path: 'resume.doc', src: doc },
            { alt: 'A download for James\'s resume in docx format', path: 'resume.docx', src: docx },
            { alt: 'A download for James\'s resume in pdf format', path: 'resume.pdf', src: pdf }
        ]
    });
    return (
        <div className="resume">
            <h2>Download Links</h2>
            <section className="links">
                {
                    state.links.map(link => {
                        return <span>
                                    <a href={process.env.PUBLIC_URL + `${state.path}${link.path}`} download rel="noreferrer" target="_blank">
                                        <img src={link.src} alt={link.alt} />
                                    </a>
                                </span>
                    })
                }
            </section>
            <section className="img-container">
                <img src={img} alt="Version of James\'s resume" />
            </section>
        </div>
    );
}