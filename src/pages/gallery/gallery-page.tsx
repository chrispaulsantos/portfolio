import React from 'react';
import './gallery-page.css';
import Page from '../page';
import Section, { SectionAnimations } from '../../components/molecules/section/section';
import fam from '../../images/fam.jpg';
import bu from '../../images/bu.jpg';
import engagement from '../../images/engagement.jpg';
import juan from '../../images/juan.jpg';

const GalleryPage = () => {
    return (
        <Page>
            <Section animate animation={SectionAnimations.SlideInRight}>
                <div className="flex justify-content-center">
                    <img alt="Engagement" className="gallery-picture" src={engagement} />
                </div>
            </Section>
            <Section animate animation={SectionAnimations.SlideInLeft}>
                <div className="flex justify-content-center">
                    <img alt="Family" className="gallery-picture" src={fam} />
                </div>
            </Section>
            <Section animate animation={SectionAnimations.SlideInRight}>
                <div className="flex justify-content-center">
                    <img alt="BU Graduation" className="gallery-picture" src={bu} /> 
                </div>
            </Section>
            <Section animate animation={SectionAnimations.SlideInLeft}>
                <div className="flex justify-content-center">
                    <img alt="My Friend Juan" className="gallery-picture" src={juan} /> 
                </div>
            </Section>
        </Page>
    ) 
}

export default GalleryPage;