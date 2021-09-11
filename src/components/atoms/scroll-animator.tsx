import React, { useEffect, useRef, useState } from 'react';

const ScrollAnimator = ({children, animation}: {children: JSX.Element, animation?: string}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null)
    
    useEffect(() => {
        const node = ref?.current;
    
        if (!node) return
    
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            } else {
                // setIsVisible(false);
            }
        }, {
            threshold: 0.8
        });
    
        observer.observe(node)
    
        return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    const className = isVisible ? animation || 'section-right-animation' : '';

    return <div ref={ref} className={className}>
        {children}
    </div>
}

export default ScrollAnimator;