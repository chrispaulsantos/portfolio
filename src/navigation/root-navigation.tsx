import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import ResumePage from '../pages/resume/resume-page';
import ContactPage from '../pages/contact/contact-page';
import AboutPage from '../pages/about/about-page';
import GalleryPage from '../pages/gallery/gallery-page';

const RootNavigation = () => {
    return (
        <Switch>
            <Route path="/about">
                <AboutPage /> 
            </Route>
            <Route path="/resume">
                <ResumePage />
            </Route>
            <Route path="/contact">
                <ContactPage />
            </Route>
            <Route path="/gallery">
                <GalleryPage />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch>
    )
}

export default RootNavigation;