import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../pages/home/home-page';

const RootNavigation = () => {
    return (
        <Switch>
            <Route path="/about">
                <div>About</div>
            </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
        </Switch>
    )
}

export default RootNavigation;