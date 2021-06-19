import React, { useEffect, useRef, useState } from 'react';

export enum SectionAnimations {
    SlideInLeft = 'section-left-animation',
    SlideInRight = 'section-right-animation'
}

interface SectionProps {
    children: JSX.Element | JSX.Element[];
    animation?: string;
    animate?: boolean;
}

const Section = ({children, animate, animation}: SectionProps) => {
    const [isVisible, setIsVisible] = useState(!animate);
    const sectionRef = useRef<HTMLElement | null>(null)
    
    useEffect(() => {
        // If we don't want this section animated then return
        if (!animate) {
            return;
        }

        const node = sectionRef?.current;
    
        if (!node) return
    
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        });
    
        observer.observe(node)
    
        return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionRef]);

    const className = animate && isVisible ? animation || 'section-left-animation' : '';

    return (
        <section ref={sectionRef} className={className}>
            {children}
        </section>
    ) 
}

export default Section;