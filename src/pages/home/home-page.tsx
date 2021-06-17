import React from 'react';
import './home-page.css';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';

const HomePage = () => {
    return (
        <section>
            <div className="card profile flex flex-row justify-content-center align-items-center">
                <div>
                    <div className="profile-image"></div>
                </div>
                <div className="profile-content-container justify-content-center">
                    <div className="profile-content">
                        <small id="profile-line-1">HELLO THERE, MY NAME IS</small>
                        <h1 id="profile-line-2">Chris Santos</h1>
                        <p id="profile-line-3" className="aurebesh">Chris Santos</p>
                        <aside id="profile-line-4">Software Development Engineer I | AWS</aside>
                        <br/>
                        <p className="bio">
                            I am a builder. My passion has always been to build anything and everything. When I was younger, it was Legos,
                            and now it is custom light fixtures for my house, printed circuit boards for my vegetable garden sprinkler system,
                            and full stack software for managing my comic collection. I am a perfectionist, and I put my heart and soul into
                            everything I build (yes, even still Legos).
                        </p>
                        <br/>
                        <br/>
                        <div className="social-items flex flex-row">
                            <a id="profile-github" href="https://github.com/chrispaulsantos" target="_blank">
                                <img alt="github" src={github}/>
                            </a>
                            <a id="profile-linkedin" href="https://linkedin.com/in/chris-santos" target="_blank">
                                <img alt="linkedin" src={linkedin}/>
                            </a>
                            <a id="profile-ig" href="https://github.com/chrispaulsantos" target="_blank">
                                <img alt="github" src={github}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;