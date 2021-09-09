import Timeline, { TimelineSkill, TimelineEvent, TimelineEventDescription, TimelineDate, TimelineEducation } from '../molecules/timeline/timeline'

const WorkTimeline = () => {
    return <Timeline>
        <TimelineEvent company="AWS" title="Software Development Engineer I" date="April 2020 - Present" location="Dallas, TX">
            <TimelineEventDescription content="Built a data warehouse as a service (DWaaS) to increase security and eliminated customer’s requirement to have technical knowledge of infrastructure" />
            <TimelineEventDescription content="Reduced support team’s work load by creating a web application to monitor and perform actions against all accounts within DWaaS" />
            <TimelineEventDescription content="Developed application for data engineers to execute machine learning scripts" />
        </TimelineEvent>

        <TimelineEducation src="/images/timeline/bu.svg" date="September 2021" content="Master of Science | Software Development" />

        <TimelineSkill src="/images/timeline/aws.svg" />
        <TimelineSkill src="/images/timeline/react.svg" />
        <TimelineSkill src="/images/timeline/postgres.svg" />

        <TimelineEvent company="Storytellers Social" title="CTO/Founder" date="September 2018 - Present" location="New Jersey">
            <TimelineEventDescription content="Full stack engineer for internal and external projects" />
            <TimelineEventDescription content="Develops and tests mobile and responsive web applications" />
            <TimelineEventDescription content="Deploys products on cloud platforms" />
            <TimelineEventDescription content="Automates build and deployment process" />
        </TimelineEvent>

        <TimelineEvent company="Fidelity Investments" title="Software Engineer" date="June 2019 - April 2020" location="Westlake, TX">
            <TimelineEventDescription content="Full stack engineer responsible for developing medium to large-scale applications" />
            <TimelineEventDescription content="Responsible for making architectural decisions for projects" />
            <TimelineEventDescription content="Communicates with customers and coordinates product delivery" />
            <TimelineEventDescription content="Collaborates with team members and customers in a dynamic, fast-paced environment" />
        </TimelineEvent>

        <TimelineEvent company="Fidelity Investments" title="Associate Software Engineer" date="January 2018 - June 2019" location="Westlake, TX">
            <TimelineEventDescription content="Develops products using the Agile life cycle" />
            <TimelineEventDescription content="Works with internal cloud platform to deploy applications" />
            <TimelineEventDescription content="Developed framework to automate creation of boilerplate code for server-side applications" />
        </TimelineEvent>

        <TimelineEducation src="/images/timeline/umaine.svg" date="December 2017" content="Bachelor of Science | Electrical Engineering" />

        <TimelineSkill src="/images/timeline/docker.svg" />
        <TimelineSkill src="/images/timeline/java.svg" />

        <TimelineEvent company="Fidelity Investments" title="Software Engineering Intern" date="May 2017 - August 2017" location="Westlake, TX">
        </TimelineEvent>

        <TimelineSkill src="/images/timeline/angular.svg" />
        <TimelineSkill src="/images/timeline/nodejs.svg" />
        <TimelineSkill src="/images/timeline/mongo.svg" />

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