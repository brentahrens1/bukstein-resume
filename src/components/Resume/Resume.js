import { useState } from 'react'
import '../../scss/_resume.scss'

import ResumeDoc from "../../assets/Ryan_Bukstein_Resume.pdf"

const Resume = () => {
    const [ onScroll, setOnScroll ] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setOnScroll(true)
        } else {
            setOnScroll(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    const backToTop = () => {
        document.documentElement.scrollTop = 0;
    }


    return (
        <div className="resume">
            <div className="resume__header">
                <h1 className="name">Ryan Bukstein</h1>
                <div className="links">
                    <p><a href="mailto:rb@ryanbukstein.com" target="_blank">rb@ryanbukstein.com</a></p>
                    <div className="divider">|</div>
                    <p><a href="tel:206-850-8376" target="_blank">206-850-8376</a></p>
                    <div className="divider">|</div>
                    <p><a href={ResumeDoc} target="_blank">Resume</a></p>
                    <div className="divider">|</div>
                    <p><a href="https://www.linkedin.com/in/ryanbukstein/" target="_blank">LinkedIn</a></p>
                </div>
                <div className="hr" />
            </div>
            <div className="resume__mission-statement">
                <p>
                    I am driven by curiosity, creativity, and the intention to use business as a platform to build community. My experience is in Public Relations, Marketing and Brand Positioning with 15+ years working to grow the Ace Hotel brand from a small hotel in Seattle to a global hospitality company. I am currently working as a brand consultant to various clients.
                </p>
                <div className="hr" />
            </div>
            <div className="resume__skills">
                <h1>Skills</h1>
                <p><strong>Public Relations.</strong> Over 20 years of work in public relations strategy and outreach with contacts across all categories and experience managing PR agencies globally.</p>
                <p>
                    <strong>Marketing.</strong> Experience in long term planning and action in advertising, social, customer relationship management, and grassroots marketing.
                </p>
                <p>
                    <strong>Partnership.</strong> Skill set to identify and develop brand building partnership opportunities with personal relationships across a variety of industries.
                </p>
                <p>
                    <strong>Creative Direction.</strong> Unique understanding of how to position a brand through changing culture and
                    trends with experience connecting design, branding, PR, partnerships and messaging to tell a strong
                    brand story.
                </p>
                <p>
                    <strong>Team Management.</strong> Extensive experience working with teams across time zones and skill sets.
                    Management and leadership experience of 15+ person teams, a leader of leaders. 
                </p>
                <p><strong>Company Growth.</strong>  Experience leading growth of brand and team structure.  Problem solving through growth challenges, creating systems and driving employee engagement.</p>
            </div>
            <div className="resume__experience">
                <h1>Experience</h1>
                <section>
                    <div className="tags top">
                        <p><strong>RB Brand Consulting : 2020-Present</strong></p>
                    </div>
                    <p>
                        In summer of 2020, I began an advisory role at Ace Hotel to focus on my outside consulting work. My first client, the innovative eco friendly builder Hiatus Homes, is already making news with a cover story in Oregon 1859 Magazine.
                    </p>
                </section>
                <section>
                    <div className="tags top">
                        <p><strong>Ace Hotel Vice President of Brand 2013-2020</strong></p>
                    </div>
                    <p>
                        Over the last two decades, I have helped lead the innovative, award winning brand team at Ace Hotel Group. As Vice President of Brand, I most recently helped spearhead the creation of two new hotel brands under the Atelier Ace umbrella: Sister City in New York City and Maison De La Luz in New Orleans. I also utilized my past experience working and studying in Japan to help lead the launch of Ace Hotel Kyoto. 
                    </p>
                    <p>
                        My role included the oversight of partnerships on a global level, working with partners including: Headspace, Microsoft, Beams Japan, and Dropbox. My leadership in public relations strategy resulted in feature stories in The New York Times, WSJ Magazine., The Washington Post, Wallpaper Magazine, Travel + Leisure, Condé Nast Traveller and Architectural Digest Magazine to name a few.
                    </p>
                    <p>
                        Our marketing and event programming strategy helped drive successful openings and swift stabilization of hotels in New Orleans, Chicago, Pittsburgh, Los Angeles, and London. Always willing to take on new challenges, I also took a leadership role in the branding and operation of the historic United Artists Theater in Downtown Los Angeles. Pulling from my deep love of music, I oversaw the creative direction of Ace Hotel’s music program, including all in house piped music, playlists, and live events. My work led to collaborations with Bjork, Flatbush Zombies, Danilo Perez, Preservation Hall Jazz Band and more.
                    </p>
                </section>
                <section>
                    <div className="tags">
                        <p><strong>Ace Hotel Director of PR and Marketing 2009-2013</strong></p>
                    </div>
                    <p>
                        The first national growth phase of Ace Hotel saw our team taking on locations in New York, NY and Palm Springs, CA.  My role expanded to Director of PR and Marketing, while I continued to oversee public relations, marketing, event programming, partnerships, and web development. In Palm Springs, I led the development of an event programming strategy that helped drive a new wave of tourism and positioned Ace Hotel & Swim Club to grow into one of the region’s biggest success stories. Partnerships and public relations driven by my team contributed to Ace Hotel New York’s transformation of the Nomad district in Midtown Manhattan, called by NY Magazine a “hot neighborhood starter kit”. 
                    </p>
                    <p>
                        As Ace Hotel was adding new hotel locations, we  were also growing the company’s retail business through product collaborations and storytelling around unique hotel products.  My product marketing and PR work helped drive the success of collaborations with Converse, Wings + Horns, Incase, Tokyo Bike and Reigning Champ.  Creative event marketing included a pop up shop with the Vancouver Art Gallery around the Grand Hotel Exhibition.
                    </p>
                </section>
                <section>
                    <div className="tags">
                        <p><strong>Ace Hotel PR and Marketing Manager 2006-2009</strong></p>
                    </div>
                    <p>
                        In 2006, I joined the small team creating the second Ace Hotel, in Portland, OR. Working as Marketing and PR Manager, I handled the public relations, marketing, and event programming for the launch of Ace Hotel Portland, while also project managing the design team. My work included the first of Ace Hotel’s Japan collaborations: The Inspired Travel Collection with Uniqlo and an event series with Travel Oregon to promote Portland as a destination. My brand marketing and public relations work helped Ace Hotel Portland become a significant media and financial success, receiving coverage worldwide including a large exclusive story in New York Times T Magazine.
                    </p>
                </section>
                <section className="neverstop">
                    <div className="tags">
                        <p><strong>Neverstop Marketing Intern: 2000-2002 Producer: 2002-2006</strong></p>
                    </div>
                    <p>
                        My career started early in 2000 while still a student at University of Washington in Seattle. An internship with Neverstop, an award-winning experiential marketing agency, set up the opportunity for mentorship by Alex Calderwood, founder of Neverstop and Ace Hotel. I grew from an intern at Neverstop to a creative producer executing experiential marketing for clients including Gap, Banana Republic, Standard Hotels, Starbucks and Comcast. 
                    </p>
                </section>
            </div>
            <div className="resume__education">
                <h1>Education</h1>
                <p>
                    From 1998-2002  I attended University of Washington and received a Certificate of International Studies in Business with a Minor in Music. During my time at UW,  I also participated in a 6 month study abroad program at Waseda University in Tokyo, Japan and completed an internship with Warner, Elektra, Atlantic Records. 
                </p>
            </div>
            <div className="resume__education">
                <h1>Proficiencies</h1>
                <p><strong>Language</strong> Japanese(basic)</p>
                <p><strong>Software</strong> Excel, Asana, Hive, Basecamp, Agile and Hubspot CRM, Ableton Live</p>
                <p><strong>Music</strong> Drummer in Machetres, Music Production as Steinstein</p>
            </div>
            <div onClick={backToTop} className={`back-to-top ${onScroll ? "show" : ""}`}>
                <i class="up"></i>
            </div>
        </div>
    )
}

export default Resume