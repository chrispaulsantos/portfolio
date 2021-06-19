import React from 'react';
import './gallery-page.css';
import Page from '../page';
import Section, { SectionAnimations } from '../../components/molecules/section/section';
import img from '../../images/star_wars.jpeg';

const GalleryPage = () => {
    return (
        <Page>
            <Section animate animation={SectionAnimations.SlideInLeft}>
                <div className="flex justify-content-center">
                    <img src={img} />
                </div>
            </Section>
            <Section animate animation={SectionAnimations.SlideInRight}>
                <div className="flex justify-content-center">
                    <img src={img} />
                </div>
            </Section>
            <Section animate animation={SectionAnimations.SlideInLeft}>
                <div className="flex justify-content-center">
                    <img src={img} /> 
                </div>
            </Section>
        </Page>
    ) 
}

export default GalleryPage;