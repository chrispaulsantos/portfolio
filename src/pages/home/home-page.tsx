import React from 'react';
import './home-page.css';
import Typer from '../../components/atoms/typer';

const HomePage = () => {
    return (
        <section>
            <div className="card profile flex flex-row justify-content-center align-items-center">
                {/* <div>
                    <div className="profile-image"></div>
                </div> */}
                <div className="profile-content-container justify-content-center">
                    <div className="profile-content">
                        <small id="profile-line-1">HELLO THERE, MY NAME IS</small>
                        <h1 id="profile-line-2">Chris Santos</h1>
                        <p id="profile-line-3" className="aurebesh">Chris Santos</p>
                        <aside id="profile-line-4">Software Development Engineer I | AWS</aside>
                        <br/>
                        <div className="social-items flex flex-row">
                            <a id="profile-github" href="https://github.com/chrispaulsantos" target="_blank" rel="noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a id="profile-linkedin" href="https://linkedin.com/in/chris-santos" target="_blank" rel="noreferrer">
                                {/* <img alt="linkedin" src={linkedin}/> */}
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a id="profile-phone" href="tel:+12018194615">
                                <i className="fas fa-mobile"></i>
                            </a>
                            <a id="profile-email" href="mailto:chris@jaig.dev"> 
                                <i className="fas fa-at"></i>
                            </a>
                        </div>
                        <br />
                        <Typer timing={50} lines={[`I am a builder. My passion has always been to build anything and everything. When I was younger, it was Legos,
                            and now it is custom light fixtures for my house, printed circuit boards for my vegetable garden sprinkler system,
                            and full stack software for managing my comic collection. I am a perfectionist, and I put my heart and soul into
                            everything I build (yes, even still Legos).`]} />
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;