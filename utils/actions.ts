
'use server'

export default async function Action() {
    console.log("err: bad action call");
}



export async function RecentActivity() {
    const activities = {

        gchq_mancester_cyber_analyst_event:
        {
            title: "GCHQ Manchester, Cyber Analyst Work Experience Event",
            date: "April 2023",
            body: "Learning team working, Computing, Analysis and Cyber-Security skills from GCHQ Manchester's staff.",
            link: "/activity/gchq_mancester_cyber_analyst_event", 
            image: null,
        },

        stem_residential:
        {
            title: "STEM Residential",
            date: "June 2023",
            body: "Sunderland University Computer Science and Robotics STEM Residential creating and programming Mini-Mars Rovers.",
            link: "/activity/stem_residential", 
            image: "/42a3ce0a7.jpg",
        },

        barclays_stem_stars_events:
        {
            title: "Barclays STEM Stars Events",
            date: "February 2024",
            body: "Learning cybersecurity, IT, team working and project management skills at their Radbroke Hall Technology Site.",
            link: "/activity/barclays_stem_stars_events", 
            image: null,
        },

        achieved_bronze_dofe:
        {
            title: "Achieved Bronze DofE",
            date: null,
            body: "Duke Of Edinburgh Award, with weekly volunteering sessions teaching IT skills at a local primary school.",
            link: "/activity/achieved_bronze_dofe", 
            image: "/05a7a5r56.jpg",
        },

    }   
    return activities;
}





export async function FeaturedActivity() {
    const featuredActivities = {

        gchq_mancester_cyber_analyst_event:
        {
            title: "GCHQ Manchester, Cyber Analyst Work Experience Event",
            date: "April 2023",
            body: "Learning team working, Computing, Analysis and Cyber-Security skills from GCHQ Manchester's staff.",
            link: "/activity/gchq_mancester_cyber_analyst_event", 
            image: null,
        },

        stem_residential:
        {
            title: "STEM Residential",
            date: "June 2023",
            body: "Sunderland University Computer Science and Robotics STEM Residential creating and programming Mini-Mars Rovers.",
            link: "/activity/stem_residential", 
            image: "/42a3ce0a7.jpg",
        },

        barclays_stem_stars_events:
        {
            title: "Barclays STEM Stars Events",
            date: "February 2024",
            body: "Learning cybersecurity, IT, team working and project management skills at their Radbroke Hall Technology Site.",
            link: "/activity/barclays_stem_stars_events", 
            image: null,
        },

        achieved_bronze_dofe:
        {
            title: "Achieved Bronze DofE",
            date: null,
            body: "Duke Of Edinburgh Award, with weekly volunteering sessions teaching IT skills at a local primary school.",
            link: "/activity/achieved_bronze_dofe", 
            image: "/05a7a5r56.jpg",
        },

    }   
    return featuredActivities;
}





export async function Certification() {
    const certifications = {

        a20efe123:
        {   
            title: "St John Ambulance, First Aid Training",
            date: "November 2025",
            body: "In-person course delivered by SJA.",
            link: null,
            image: null,
        },

        a1efe2d53:
        {   
            title: "St John Ambulance, Mental Wellbeing Training",
            date: "November 2025",
            body: "In-person course delivered by SJA.",
            link: null,
            image: "4a6c8eb8c.png",
        },

        a0efecf23:
        {   
            title: "Practical Github Actions",
            date: "October 2025",
            body: "LinkedIn Learning Certification in using GitHub actions, primarily using 'yaml' and 'docker' files to automate website deployments using GitHub.",
            link: null,
            image: null,
        },

    }   
    return certifications;
}




export async function App() {
    const apps = {

        a3:
        {
            title: "Portfolio Website",
            date: "October 2025",
            body: "This exact website! Created using Vercel's Next.js app router, the website automatically updates upon new github commits, and utilizes both server and client components to deliver a dynamically streamed interface...",
            link: "https://github.com/t1ger112/portfolioSite",
            image: null,
        },

        a2:
        {
            title: "AirSpace Invaders",
            date: "April 2025",
            body: "MASUAS-Themed aircraft game, inspired by 2d retro games such as (air)space invaders! Developed in Java using the Processing runtime and graphics library, with interfaces and locally saved scoring system. ",
            link: "https://github.com/t1ger112/airspace_invaders",
            image: null,
        },

        a1:
        {
            title: "The Cheezboard Website",
            date: "December 2024 - Current",
            body: "Eatcheez.com noticeboard and news website created and managed on behalf of CHEEZ regiment, part of the wider Foxhole game community. Created entirely with just basic HTML, CSS and Javascript for simplicity.",
            link: "https://github.com/t1ger112/cheezWebLIVE",
            image: null,
        },

        a0:
        {
            title: "RAF Flight-Data App",
            date: "December 2023",
            body: "Winner of Inversity challenge #3, an 'Agile Information App' in VB.NET designed to aid RAF aircrew operating within an agile operating doctrine by delivering details on over 80,000 airfields without internet access.",
            link: "https://github.com/t1ger112/RAF-Flight-Data-App",
            image: null,
        },

    }   
    return apps;
}



