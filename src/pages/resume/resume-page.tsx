import React from 'react';

const ResumePage = () => {
    return (
        <section>
            <div className="card">
                <img src={process.env.PUBLIC_URL + "/resume.svg"}/>
            </div>
        </section>
    )
}

export default ResumePage;