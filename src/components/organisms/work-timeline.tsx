import Timeline, { TimelineSkill, TimelineEvent, TimelineEventDescription, TimelineDate, TimelineEducation, TimelineProject } from '../molecules/timeline/timeline'
import './work-timeline.css';

const WorkTimeline = () => {
    return <Timeline>
        <TimelineEducation src="/images/timeline/bu.svg" date="September 2021" content="Master of Science | Software Development" />

        <TimelineSkill src="/images/timeline/aws.svg" />
        <TimelineSkill src="/images/timeline/react.svg" />
        <TimelineSkill src="/images/timeline/java.svg" />

        <TimelineEvent company="AWS" title="Software Development Engineer I" date="April 2020 - Present" location="Dallas, TX">
            <TimelineEventDescription content="Built a data warehouse as a service (DWaaS) to increase security and eliminated customer’s requirement to have technical knowledge of infrastructure" />
            <TimelineEventDescription content="Reduced support team’s work load by creating a web application to monitor and perform actions against all accounts within DWaaS" />
            <TimelineEventDescription content="Developed application for data engineers to execute machine learning scripts" />
        </TimelineEvent>

        <TimelineSkill src="/images/timeline/postgres.svg" />

        <TimelineProject
            name="Star Wars Comics"
            href="https://starwarscomics.co"
            date="June 2019"
            img="/images/timeline/logo.svg"
            description="
                As I continued to collect comics, I realized I really only had a passion for Star Wars (although yes, Marvel is great too), so I transformed
                my comic manager into Star Wars Comics. It continues to use Angular as the frontend framework, and also still uses a NodeJS/Express backend,
                although this time I used my service template, xpresso. The database switched from MongoDB, to Postgres, as the data is inherently relational.
            "
        />

        <TimelineEvent company="Fidelity Investments" title="Software Engineer" date="June 2019 - April 2020" location="Westlake, TX">
            <TimelineEventDescription content="Full stack engineer responsible for developing medium to large-scale applications" />
            <TimelineEventDescription content="Responsible for making architectural decisions for projects" />
            <TimelineEventDescription content="Communicates with customers and coordinates product delivery" />
            <TimelineEventDescription content="Collaborates with team members and customers in a dynamic, fast-paced environment" />
        </TimelineEvent>

        <TimelineEvent company="Storytellers Social" title="CTO/Founder" date="September 2018 - Present" location="New Jersey">
            <TimelineEventDescription content="Full stack engineer for internal and external projects" />
            <TimelineEventDescription content="Develops and tests mobile and responsive web applications" />
            <TimelineEventDescription content="Deploys products on cloud platforms" />
            <TimelineEventDescription content="Automates build and deployment process" />
        </TimelineEvent>

        <TimelineProject
            name="xpresso"
            href="https://www.npmjs.com/package/xpresso"
            date="August 2018"
            description="
                During my time at Fidelity, I found we were constantly creating the same boilerplate code over and over for our backend services. I set out to 
                create a code generator that would create all of the boilerplate code and decrease the development time necessary to create a backend. The project
                uses express.js to set up a RESTful API written in Typescript.
            "
        />

        <TimelineEvent company="Fidelity Investments" title="Associate Software Engineer" date="January 2018 - June 2019" location="Westlake, TX">
            <TimelineEventDescription content="Develops products using the Agile life cycle" />
            <TimelineEventDescription content="Works with internal cloud platform to deploy applications" />
            <TimelineEventDescription content="Developed framework to automate creation of boilerplate code for server-side applications" />
        </TimelineEvent>

        <TimelineEducation src="/images/timeline/umaine.svg" date="December 2017" content="Bachelor of Science | Electrical Engineering" />

        <TimelineProject 
            name="Comic Manager"
            href=""
            date="June 2017"
            img="/images/comics.svg"
            description="
                As my experience evolved, so did my Comic Manager. Version 2 was a complete rebuild, using Angular for the frontend and a NodeJS/Express backend.
                The database used was MongoDB. This would later evolve into my current comic site, Star Wars Comics.
            "/>

        <TimelineSkill src="/images/timeline/docker.svg" />
        <TimelineSkill src="/images/timeline/angular.svg" />
        <TimelineSkill src="/images/timeline/nodejs.svg" />
        <TimelineSkill src="/images/timeline/mongo.svg" />

        <TimelineEvent company="Fidelity Investments" title="Software Engineering Intern" date="May 2017 - August 2017" location="Westlake, TX">
        </TimelineEvent>

        <TimelineProject 
            name="Comic Manager"
            href=""
            date="June 2016"
            img="/images/comics.svg"
            description="
                I began collecting comics in the summer of 2015, and by this time in 2016 I had enough frontend experience to create a website.
                It began in PHP and SQL, and was launched on a Digital Ocean Droplet.
            "/>

        <TimelineEvent company="Fidelity Investments" title="Software Engineering Intern" date="May 2016 - August 2016" location="Boston, MA">
        </TimelineEvent>

        <TimelineSkill src="/images/timeline/javascript.svg" />
        <TimelineSkill src="/images/timeline/html.svg" />
        <TimelineSkill src="/images/timeline/git.svg" />

        <TimelineEvent company="Fidelity Investments" title="Software Engineering Intern" date="May 2015 - August 2015" location="Boston, MA">
        </TimelineEvent>

        <TimelineDate date="2015 - Began Career" />
    </Timeline>
}

export default WorkTimeline;