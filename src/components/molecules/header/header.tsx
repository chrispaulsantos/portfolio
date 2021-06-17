import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link to="/">Santos</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;