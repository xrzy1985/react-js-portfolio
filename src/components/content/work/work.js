import './work.scss';
import { useState } from 'react';

export default function WorkExperience(props) {
    const [work] = useState(props.state.work);

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