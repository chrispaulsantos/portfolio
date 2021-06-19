import React from 'react';
import Page from '../page';

const ResumePage = () => {
    return (
        <Page>
            <section>
                <div className="card">
                    <img alt="resume" src={process.env.PUBLIC_URL + "/resume.svg"}/>
                </div>
            </section>
        </Page>
    )
}

export default ResumePage;