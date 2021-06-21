import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <nav key="nav">
            <div>
                <ul>
                    <li>
                        <Link to="/">&lt;/<span className="aurebesh">santos</span>&gt;</Link>
                    </li>
                    <li>
                        <Link to="/about">.about()</Link>
                    </li>
                    <li>
                        <Link to="/resume">.work()</Link>
                    </li>
                    <li>
                        <Link to="/contact">.contact()</Link>
                    </li>
                    <li>
                        <Link to="/gallery">.gallery()</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;