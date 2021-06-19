import React from 'react';
import Typer from '../../components/atoms/typer';
import Section, { SectionAnimations } from '../../components/molecules/section/section';
import swImg from '../../images/star_wars.jpeg';
import crossfitImg from '../../images/crossfit.jpg';
import './about-page.css';
import Page from '../page';

const AboutPage = () => {
    return (
        <Page>
            <Section animate animation={SectionAnimations.SlideInLeft}>
                <div className="card">
                    <div className="card-header">
                        <h1>Star Wars</h1>
                        <small className="aurebesh">Star Wars</small>
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
                                <img className="star-wars-image" alt="Star Wars" src={swImg}/>
                            </div>
                            <figcaption>STAR WARS - EPISODE VIII - IT IS TIME FOR THE JEDI TO END - VARIANT - Dan Mumford</figcaption>
                        </figure>
                    </div>
                </div>
            </Section>
            <Section animate animation={SectionAnimations.SlideInRight}>
                <div className="card">
                    <div className="card-header">
                        <h1>CrossFit</h1>
                        <small className="aurebesh">crossfit</small>
                    </div>
                    <div>
                        <Typer lines={[
                            `I also like to work out. I started CrossFit in 2016 and have been doing it ever since. I never though that I would be able
                            to do half of the things I am now capable of. CrossFit has taught me that I can continue to push no matter what, and that the 
                            impossible is achievable, so long as you put the effort in. Here's a picture of my box family on Memorial Day of 2021.`
                        ]} />
                        <figure className="flex flex-column align-items-center">
                            <div>
                                <img className="star-wars-image" alt="Star Wars" src={crossfitImg}/>
                            </div>
                            <figcaption>MURPH - Memorial Day 2021</figcaption>
                        </figure>
                    </div>
                </div>
            </Section>
        </Page>
    )
}

export default AboutPage;