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
            <div className="resume__experience">
                <p><strong>Experience</strong></p>
                <Accordion
                    title="Early Career 2000-2007"
                    content="Ryan’s career started early in 2000 while still a student at University of Washington in Seattle. An internship with Neverstop, an award-winning experiential marketing agency working with Sephora, Microsoft, Nike, Uniqlo, and Target, set up the opportunity for mentorship by Alex Calderwood, founder of Neverstop and Ace Hotel. Ryan grew from an intern at Neverstop to a creative producer executing experiential marketing for clients including Gap, Banana Republic, Standard Hotels, Starbucks and Comcast."
                />
                <Accordion
                    title="Ace Hotel Beginnings 2008-2012"
                    content="Ace Hotel Beginnings 2008-2012
                    In 2007, Ryan joined the small team creating the second Ace Hotel in Portland, OR. Working as PR and Marketing Manager, Ryan handled the public relations, marketing, and event programming for the launch of Ace Hotel Portland, while also project managing the design team. His work culminated in the Inspired Travel collection, a collaboration with Uniqlo featuring artists and designers from the Pacific Northwest.  Ace Hotel Portland was a significant media and financial success, receiving coverage worldwide including a large exclusive story in New York Times T Magazine.  
                     
                    The next phase of Ace Hotel saw Ryan and the team taking on growth to locations in Midtown Manhattan NYC and Palm Springs, CA.  Ryan’s role expanded to Director of Marketing, continuing to oversee public relations, marketing, event programming, partnerships, and web development. Ace Hotel New York and Ace Hotel Palm Springs were recognized by the New York Times, Travel and Leisure and 100’s of publications across the globe.  Awards from Wallpaper Magazine, Condenast Traveler’s gold List and LE Miami combined with partnerships with Opening Ceremony, KEXP Radio, Incase, Converse,  Martin Greenfield and others set up the hotels for critical and financial success."
                />
                <Accordion
                    title="Ace Hotel Global Growth 2013-2015"
                    content="As Ace Hotel continued to grow, Ryan was elevated to Vice President of Brand. While Ryan led the team to continue to drive exposure and revenue to the operating hotels, he also oversaw the opening of Ace’s first global locations. Atelier Ace created their first luxury product, American Trade Hotel in Panama City, Panama.  Working closely with Jazz legend Danilo Perez, Ryan worked to position this new hotel and jazz club alongside the storied history and culture of Panama City.  In London, Ace Hotel utilized it’s cultural lens to transform a crown plaza hotel into Ace Hotel London Shoreditch.  Collaborations with Moog, London Design Festival, and more helped define the Ace brand in Europe and as the Financial Times put it 'its careful, well-designed confidence allows it to slot into Shoreditch with deceptive ease. But, more importantly, it has given London back a bit of its streetscape that seemed lost forever.'"
                />
                <Accordion
                    title="Pittsburgh, Chicago, New Orleans and LA plus a Theatre 2016-2017"
                    content="After opening Ace Hotel Pittsburgh in 2016 a new round of domestic hotel openings brought new challenges and opportunities to the Ace Hotel team. In the renovation and operation of a 1600 seat historical theatre, Ryan took a leadership role in the process and helped craft the plan to operate the theatre to drive maximum brand benefit to the hotel.  The successful launch of Ace Hotel Downtown Los Angeles and the Theatre at Ace Hotel was followed up with openings in New Orleans and Chicago. At Ace Hotel New Orleans’ Ryan’s work to lead the development of a unique in lobby music venue, helped drive collaborations with Preservation Hall, Brian Blade, Daniel Lanois and others.  His leadership on community relations helped Ace Hotel Chicago open with praise from the Washington Post of 'socially conscious hotels give back to the community.'"
                />
                <Accordion
                    title="Two New Brands and Ace Hotel Kyoto, Japan 2018-2020"
                    content="In his last phase as Vice President of Brand at Ace Hotel, Ryan helped spearhead the creation of two new hotel brands under the Atelier Ace umbrella and bring about the launch of the longtime dream of a hotel in Japan.  For Sister City, a distilled service brand, Ryan worked with Headspace, Microsoft and Bjork to bring the new hotel concept to life and received praise in Fast Company, USA Today and Wallpaper Magazine.  Mason De La Luz engaged a more high end luxury audience, creating collaborations with Artspace and Phaidon and receiving praise in the Wall Street Journal and others.  Ryan was a key leader in traveling to Japan to develop Ace Hotel Kyoto, the brand’s first outpost in Asia."
                />
                <Accordion
                    title="RB Brand Consulting 2020 -"
                    content="In summer of 2020 Ryan transitioned into an advisory role at Ace Hotel to focus on his outside consulting work. His first client, the innovative real estate company Hiatus Homes, is already making news with a cover story in Oregon 1859 Magazine."
                />
            </div>
            <div className="resume__education">
                <p><strong>Education</strong></p>
                <p>From 1998-2002 Ryan attended University of Washington and received a Certificate of International Studies in Business with a Minor in Music. During Ryan’s time at UW he also participated in a 6 month study abroad program at Waseda University in Tokyo, Japan and completed an internship with Warner, Elektra, Atlantic Records.</p>
                <p><strong>Proficiencies</strong></p>
                <p>Language : English, Japanese(basic)</p>
                <p>Software : Excel, Word, Asana, Hive, Basecamp, Agile CRM, Ableton Live</p>
                <p><strong>Music</strong></p>
                <p>Drummer in <a href="https://machetres.bandcamp.com/" target="_blank">Machetres</a></p>
                <p>Music Production as <a href="https://soundcloud.com/steinstein" target="_blank">Steinstein</a></p>
            </div>
            <div className="resume__contact">
                <p><strong>Get in Touch</strong></p>
                <p><a href="mailto:ryan@ryanbukstein.com" target="_blank">ryan@ryanbukstein.com</a></p>
                <p><a href="tel:206-850-8376" target="_blank">206-850-8376</a></p>
            </div>
        </div>
    )
}

export default Resume