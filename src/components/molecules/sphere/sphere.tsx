import React, { useEffect, useRef } from 'react';
import './sphere.css';
import {generateSphere} from './sphere-controller';

const Sphere = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        generateSphere(ref as React.MutableRefObject<HTMLElement>, 125);
    }, [ref]);

    return <div ref={ref} className="sphere"></div>
}

export default Sphere;