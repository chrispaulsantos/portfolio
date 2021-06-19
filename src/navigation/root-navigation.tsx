import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import ResumePage from '../pages/resume/resume-page';
import ContactPage from '../pages/contact/contact-page';

const RootNavigation = () => {
    return (
        <Switch>
            <Route path="/about">
                <div className="">&#x2022;</div>
            </Route>
            <Route path="/resume">
                <ResumePage />
            </Route>
            <Route path="/contact">
                <ContactPage />
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch>
    )
}

export default RootNavigation;