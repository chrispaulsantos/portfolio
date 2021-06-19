import React from 'react';
import Typer from '../../components/atoms/typer';
import img from '../../images/star_wars.jpeg';
import './about-page.css';
import Page from '../page';

const AboutPage = () => {
    return (
        <Page>
            <section>
                <div className="card">
                    <div className="card-header">
                        <h1>About Me</h1>
                        <small className="aurebesh">About Me</small>
                    </div>
                    <div>
                        <Typer lines={[
                            `I am a huge Star Wars fan. I read the comics and books, and stay up to date on all of the movies and TV shows. 
                            I also collect Star Wars art and currently have about 15 pieces. Also part of my collection is around 30 Funko Pop figures. 
                            My favorite Star Wars character is Mitth'raw'nuruodo, or Thrawn for short. His tactical genius and ability to use art
                            as a tool against his enemies is most impressive.`
                        ]} />
                        <figure className="flex flex-column align-items-center">
                            <div>
                                <img className="star-wars-image" alt="Star Wars" src={img}/>
                            </div>
                            <figcaption>STAR WARS - EPISODE VIII - IT IS TIME FOR THE JEDI TO END - VARIANT - Dan Mumford</figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </Page>
    )
}

export default AboutPage;