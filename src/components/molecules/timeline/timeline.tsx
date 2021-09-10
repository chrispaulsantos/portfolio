import ScrollAnimator from '../../atoms/scroll-animator';

export const TimelineEventDescription = ({content}: {content: string}) => {
    return <div style={{display: 'flex', flexDirection: 'row', marginBottom: '0.5rem'}}>
        <p style={{margin: 0, marginRight: '0.5rem'}}>-</p>
        <p style={{margin: 0}}>{content}</p>
    </div>
}

export const TimelineEvent = ({children, company, title, location, date}: {children?: JSX.Element | JSX.Element[], company: string, title: string, location: string, date: string}) => {
    return <div style={{
        position: 'relative',
        // backgroundColor: '#9368b7',
        backgroundColor: '#fff',
        // color: '#fefefe',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderRadius: '12px'
    }}>
        <div style={{
            borderRadius: '50%',
            width: 8,
            height: 8,
            display: 'block',
            position: 'absolute',
            backgroundColor: '#444',
            top: '50%',
            left: 'calc(-1rem - 4.5px)'
        }}></div>
        <div style={{padding: '2rem', }}>
            <h2>{title} | {company}</h2>
            <h3>{date}</h3>
            <h3>{location}</h3>
            <div style={{marginTop: '1rem'}}>
                {children}
            </div>
        </div>
        <div className="aurebesh" style={{textAlign: 'right', color: 'rgba(128,128,128,0.25)', paddingBottom: '1rem', paddingRight: '1rem'}}>{company}</div>
    </div>
}

export const TimelineSkill = ({src}: {children?: JSX.Element | JSX.Element[], src: string}) => {
    return <div style={{
        position: 'relative',
        // backgroundColor: '#9368b7',
        // backgroundColor: '#fff',
        // color: '#fefefe',
        // boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        // borderRadius: '12px'
    }}>
        <div style={{
            borderRadius: '50%',
            width: 8,
            height: 8,
            display: 'block',
            position: 'absolute',
            backgroundColor: '#444',
            top: '50%',
            left: 'calc(-1rem - 4.5px)'
        }}></div>
        <div style={{padding: 0, top: 4, position: 'relative', display: 'flex', alignItems: 'center' }}>
            {/* &nbsp;{date} */}
            <img height="60" src={src} />
        </div>
        {/* <div className="aurebesh" style={{textAlign: 'right', color: 'rgba(128,128,128,0.25)', paddingBottom: '1rem', paddingRight: '1rem'}}>{company}</div> */}
    </div>
}

export const TimelineDate = ({date}: {children?: JSX.Element | JSX.Element[], date: string}) => {
    return <div style={{
        position: 'relative',
        // backgroundColor: '#9368b7',
        backgroundColor: '#fff',
        // color: '#fefefe',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderRadius: '12px',
    }}>
        <div style={{
            borderRadius: '50%',
            width: 8,
            height: 8,
            display: 'block',
            position: 'absolute',
            backgroundColor: '#444',
            top: '50%',
            left: 'calc(-1rem - 4.5px)'
        }}></div>
        <div style={{padding: '1rem', position: 'relative', display: 'flex', alignItems: 'center' }}>
            &nbsp;{date}
        </div>
        {/* <div className="aurebesh" style={{textAlign: 'right', color: 'rgba(128,128,128,0.25)', paddingBottom: '1rem', paddingRight: '1rem'}}>{company}</div> */}
    </div>
}

export const TimelineEducation = ({content, src, date}: {content: string, src: string, date: string}) => {
    return <div style={{
        position: 'relative',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderRadius: '12px',
    }}>
        <div style={{
            borderRadius: '50%',
            width: 8,
            height: 8,
            display: 'block',
            position: 'absolute',
            backgroundColor: '#444',
            top: '50%',
            left: 'calc(-1rem - 4.5px)'
        }}></div>
        <div style={{padding: '1rem', position: 'relative', display: 'flex', alignItems: 'center' }}>
            <img height="60" src={src} />
            <div style={{marginLeft: '1rem'}}>
                <h3>
                    {content}
                </h3>
                <small>{date}</small>
            </div>
        </div>
    </div>
}

export const TimelineProject = ({name, href, date, img, description}: {name: string; href: string; date: string; img?: string; description?: string}) => {
    return <div style={{
        position: 'relative',
        backgroundColor: '#fff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderRadius: '12px',
    }}>
        <div style={{
            borderRadius: '50%',
            width: 8,
            height: 8,
            display: 'block',
            position: 'absolute',
            backgroundColor: '#444',
            top: '50%',
            left: 'calc(-1rem - 4.5px)'
        }}></div>
        <div style={{padding: '1rem', position: 'relative', display: 'flex', alignItems: 'center' }}>
            {
                img ? <img src={img} height="60"/> : 
                <h3>
                   {name} 
                </h3>
            }
            <div style={{marginLeft: '1rem', display: 'flex', flexDirection: 'column'}}>
                <a className="link" href={href} target="_blank">{name}</a>
                <small>{date}</small>
                <div>{description}</div>
            </div>
        </div>
    </div>
}

const Timeline = ({children}: {children: JSX.Element[]}) => {
    return <div style={{borderLeft: '1px solid #444',  width: '100%', position: 'relative', paddingTop: '2rem', paddingLeft: '1rem'}}>
        {
            children.map((child, i) => {
                return <div key={i} style={{marginBottom: '3rem'}}>
                    <ScrollAnimator animation="timeline-event-animation">
                        {child}
                    </ScrollAnimator>
                </div>
            })
        }
    </div>
}

export default Timeline;