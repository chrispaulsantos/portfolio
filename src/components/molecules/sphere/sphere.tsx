import React, { useEffect, useRef } from 'react';
import './sphere.css';
import {generateSphere} from './sphere-controller';

const Sphere = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const timeoutIds = generateSphere(ref as React.MutableRefObject<HTMLElement>, 125);

        // We get the timeout ids back so we can clear if we unmount the component early
        return () => timeoutIds.forEach(id => clearTimeout(id));
    }, [ref]);

    return <div ref={ref} className="sphere"></div>
}

export default Sphere;