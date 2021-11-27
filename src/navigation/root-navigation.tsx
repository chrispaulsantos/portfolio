import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import ResumePage from '../pages/resume/resume-page';
import ContactPage from '../pages/contact/contact-page';
import AboutPage from '../pages/about/about-page';
import GalleryPage from '../pages/gallery/gallery-page';

const RootNavigation = () => {
    return (
        <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/" element={<HomePage />} />                
        </Routes>
    )
}

export default RootNavigation;