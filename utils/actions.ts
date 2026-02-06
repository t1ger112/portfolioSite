
'use server'

export default async function Action() {
    console.log("err: bad action call");
}



export async function RecentActivity() {
    const activities = {
        
        weee_charity:
        {
            title: "Weee-Charity Volunteering",
            date: "November 2025 | Weee Charity Warrington",
            body: "Volunteering weekly at Weee Charity in Warrington, a tech charity who specialize in the formal disposal, recycling and reselling of used or waste electronics. I am currently assigned to recycling, disposal and certifying formal data-removal on client laptops.",
            link: "/activity/weee_charity", 
            site: "https://weeecharity.com/",
            image: "/15e184ace7.jpg",
            image2: null,
        },

        poppy_appeal_2025:
        {
            title: "Poppy Appeal",
            date: "November 2025 | Manchester City Centre",
            body: "Selling poppies on behalf of the Royal British Legion's poppy appeal, where we were present throughout the day at St.Peters Square and Market Street in the Manchester city centre. The total donation amount we managed to raise was £243.85 in cash!",
            link: "/activity/poppy_appeal_2025", 
            site: "https://www.britishlegion.org.uk/",
            image: "/651ce869af.jpg",
            image2: null,
        },

        didsbury_park_leaf_cleanup:
        {
            title: "Didsbury Park Leaf-Cleanup",
            date: "November 2025 | Greater Manchester",
            body: "Volunteering on a leaf cleanup at the local park in Didsbury, Manchester. Specifically aimed at removing the large quantity of leaves covering the ground and footpaths around the park.",
            link: "/activity/didsbury_park_leaf_cleanup", 
            site: null,
            image: "/328e181c84.jpg",
            image2: null,
        },

        gchq_mancester_cyber_analyst_event:
        {
            title: "GCHQ Manchester, Cyber Analyst Work Experience Event",
            date: "April 2023 | GCHQ Manchester",
            body: "Learning team working, Computing, Analysis and Cyber-Security skills at GCHQ's Manchester site.",
            link: "/activity/gchq_mancester_cyber_analyst_event", 
            site: null,
            image: null,
            image2: null,
        },

        stem_residential:
        {
            title: "STEM Residential",
            date: "June 2023 | Sunderland University",
            body: "Sunderland University Computer Science and Robotics STEM Residential creating and programming Mini-Mars Rovers.",
            link: "/activity/stem_residential", 
            site: null,
            image: "/42a3ce0a7.jpg",
            image2: null,
        },

        barclays_stem_stars_events:
        {
            title: "Barclays STEM Stars Events",
            date: "February 2024 | Barclays Radbroke Hall",
            body: "Learning cybersecurity, IT, team working and project management skills at their Radbroke Hall Technology Site.",
            link: "/activity/barclays_stem_stars_events",
            site: null, 
            image: null,
            image2: null,
        },

        achieved_bronze_dofe:
        {
            title: "Achieved Bronze DofE",
            date: "2020-2022 | Duke of Edinburgh Award",
            body: "Duke Of Edinburgh Award, with weekly volunteering sessions teaching IT skills at a local primary school.",
            link: "/activity/achieved_bronze_dofe", 
            site: null,
            image: "/05a7a5r56.jpg",
            image2: null,
        },

    }   
    return activities;
}





export async function FeaturedActivity() {
    const featuredActivities = {

        gchq_mancester_cyber_analyst_event:
        {
            title: "Cyber Analyst Work Experience Event, GCHQ Mcr.",
            date: "April 2023 | GCHQ Manchester",
            body: "Learning team working, Computing, Analysis and Cyber-Security skills at GCHQ's Manchester site.",
            link: "/activity/gchq_mancester_cyber_analyst_event", 
            site: null,
            image: null,
        },

        stem_residential:
        {
            title: "STEM Residential",
            date: "June 2023 | Sunderland University",
            body: "Sunderland University Computer Science and Robotics STEM Residential creating and programming Mini-Mars Rovers.",
            link: "/activity/stem_residential",
            site: null, 
            image: "/42a3ce0a7.jpg",
        },

        barclays_stem_stars_events:
        {
            title: "Barclays STEM Stars Events",
            date: "February 2024 | Barclays Radbroke Hall",
            body: "Learning cybersecurity, IT, team working and project management skills at their Radbroke Hall Technology Site.",
            link: "/activity/barclays_stem_stars_events", 
            site: null,
            image: null,
        },

        achieved_bronze_dofe:
        {
            title: "Achieved Bronze DofE",
            date: "2020-2022 | Duke of Edinburgh Award",
            body: "Duke Of Edinburgh Award, with weekly volunteering sessions teaching IT skills at a local primary school.",
            link: "/activity/achieved_bronze_dofe",
            site: null, 
            image: "/05a7a5r56.jpg",
        },

    }   
    return featuredActivities;
}





export async function Certification() {
    const certifications = {

        a33d5e891:
        {   
            title: "GDPR Compliance: Essential Training",
            date: "December 2025 | LinkedIn Learning",
            body: "LinkedIn Learning Certification on Essential Training for GDPR Compliance, completed as part of a university legal and ethical unit.",
            link: "/certifications/a33d5e891", 
            site: null,
            image: "/36a84c8f4.png",
        },
        
        a33425ef1:
        {   
            title: "Devops Best Practices for Sustainability in the Cloud",
            date: "December 2025 | LinkedIn Learning",
            body: "LinkedIn Learning Certification on Devops Best Practices for Sustainability in the Cloud, for university sustainability unit.",
            link: "/certifications/a33425ef1", 
            site: null,
            image: "/36a84c8f4.png",
        },

        a20efe123:
        {   
            title: "First Aid Training",
            date: "November 2025 | St John Ambulance",
            body: "In-person complete first-aid course with additional training on carbon monoxide poisoning aimed at students, delivered by SJA staff.",
            link: "/certifications/a20efe123", 
            site: null,
            image: "/646d84e8a.png",
        },

        a1efe2d53:
        {   
            title: "Mental Wellbeing Training",
            date: "November 2025 | St John Ambulance",
            body: "In-person mental health and wellbeing course, delivered by SJA staff.",
            link: "/certifications/a1efe2d53", 
            site: null,
            image: "/4a6c8eb8c.png",
        },

        a0efecf23:
        {   
            title: "Practical Github Actions",
            date: "October 2025 | LinkedIn Learning",
            body: "LinkedIn Learning Certification in using GitHub actions, primarily using 'yaml' and 'docker' files to automate website deployments using GitHub.",
            link: "/certifications/a0efecf23", 
            site: null,
            image: "/56a4e8fe6c.png",
        },

    }   
    return certifications;
}




export async function App() {
    const apps = {

        portfolio:
        {
            title: "This Portfolio Website",
            date: "October 2025 | Vercel Next.js App, React, TS, CSS",
            body: "Created from scratch using Vercel's Next.js app router, it automatically updates upon new github commits, and utilizes both server and client components to deliver a dynamically streamed web interface.",
            link: "/apps/portfolio", 
            github: "https://github.com/t1ger112/portfolioSite",
            site: "https://freddierobinson.com",
            image: null,
        },

        airspace_invaders:
        {
            title: "AirSpace Invaders",
            date: "April 2025 | Java, Processing Graphics Library",
            body: "MASUAS-Themed aircraft game, inspired by 2d retro games such as (air)space invaders! Developed in Java using the Processing runtime and graphics library, with interfaces and locally saved scoring system. ",
            link: "/apps/airspace_invaders", 
            github: "https://github.com/t1ger112/airspace_invaders",
            site: null,
            image: null,
        },

        the_cheezboard:
        {
            title: "The Cheezboard Website",
            date: "December 2024 - Current | HTML, CSS, Javascript",
            body: "Eatcheez.com noticeboard and news website created and managed on behalf of CHEEZ regiment, part of the wider Foxhole game community. Created entirely with just basic HTML, CSS and Javascript for simplicity.",
            link: "/apps/the_cheezboard", 
            github: "https://github.com/t1ger112/cheezWebLIVE",
            site: "https://eatcheez.com",
            image: null,
        },

        flight_data_app:
        {
            title: "RAF Flight-Data App",
            date: "December 2023 | Visual Basic.NET",
            body: "Winner of Inversity challenge #3, an 'Agile Information App' in VB.NET designed to aid RAF aircrew operating within an agile operating doctrine by delivering details on over 80,000 airfields without internet access.",
            link: "/apps/flight_data_app", 
            github: "https://github.com/t1ger112/RAF-Flight-Data-App",
            site: "https://www.priestley.ac.uk/aspiring-pilot-flying-high-after-challenge-win/",
            image: null,
        },

    }   
    return apps;
}



