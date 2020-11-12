import '../../scss/_resume.scss'

import Accordion from '../Accordion/Accordion'

const Resume = () => {
    return (
        <div className="resume">
            <div className="resume__header">
                <h1>Ryan Bukstein</h1>
                <p><a href="mailto:rb@ryanbukstein.com" target="_blank">rb@ryanbukstein.com</a></p>
                <p><a href="tel:206-850-8376" target="_blank">206-850-8376</a></p>
            </div>
            <div className="resume__skills">
                <p><strong>Ryan Bukstein</strong> (born March 14th, 1980) is a Public Relations, Marketing and Brand Positioning expert living in Portland, OR. Ryan’s two decades of brand development experience include 15+ years working to grow the Ace Hotel brand from a small hotel in Seattle to a global hospitality company. Ryan is currently working as a brand consultant to various clients and advisor to Ace Hotel Group.</p>
                <div className="resume-skills-inner">
                    <p className="title"><strong>Skills</strong></p>
                    <p>Public Relations : Over 20 years of work in Public Relations with contacts across all categories.  Extensive experience managing PR agencies globally and working from initial strategy to outreach and pitching.</p>
                    <p>Marketing : Experience in Advertising, CRM, Grassroots Marketing and Partnerships.  30K foot view of marketing and brand positioning. Experience working with partners to drive exposure and break through the noise.  Long and short term marketing planning and budgeting.</p>
                    <p>Creative Direction : Unique understanding of how to position a brand through changing culture and trends.  Displayed experience connecting design, branding, PR and messaging to tell a strong brand story. Utilizing cultural partnerships and local community engagement to create and maintain brand relevance.</p>
                    <p>Team Management : Extensive experience working with teams across time zones and skill sets.  Management and leadership experience of 10+ person teams.  Working closely with executive level hotel teams, a leader of leaders.</p>
                </div>
            </div>
            <Accordion />
        </div>
    )
}

export default Resume