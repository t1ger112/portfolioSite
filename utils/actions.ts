
'use server'

export default async function Action() {
    console.log("err: bad action call");
}

// export async function Copy(link : string){
//     const copyVal = "https://" + window.location.host + "#" + link;
//     navigator.clipboard.writeText(copyVal);
// }

// export async function Red(linker: string) {
//     window.location.href = "/" + linker;
//     console.log('ERR: REDIRECT FAILED');
// }

// function validateImagePath(path: string | null): string | null {
//     if (!path) return null;
//     return path.startsWith('/') ? path : `/${path}`;
// }


export async function RecentActivity() {
    const activities = {

        a3:
        {
            title: "GCHQ Manchester, Cyber Analyst Work Experience Event",
            date: "April 2023",
            body: "Learning team working, Computing, Analysis and Cyber-Security skills from GCHQ Manchester's staff.",
            link: null, 
            image: null,
        },

        a2:
        {
            title: "STEM Residential",
            date: "June 2023",
            body: "Sunderland University Computer Science and Robotics STEM Residential creating and programming Mini-Mars Rovers.",
            link: null, 
            image: "/42a3ce0a7.jpg",
        },

        a1:
        {
            title: "Barclays STEM Stars Events",
            date: "February 2024",
            body: "Learning cybersecurity, IT, team working and project management skills at their Radbroke Hall Technology Site.",
            link: null, 
            image: null,
        },

        a0:
        {
            title: "Achieved Bronze DofE",
            date: null,
            body: "Duke Of Edinburgh Award, with weekly volunteering sessions teaching IT skills at a local primary school.",
            link: null, 
            image: "/05a7a5r56.jpg",
        },

    }   
    return activities;
}

export async function FeaturedActivity() {
    const featuredActivities = {

        a3:
        {
            title: "GCHQ Manchester, Cyber Analyst Work Experience Event",
            date: "April 2023",
            body: "Learning team working, Computing, Analysis and Cyber-Security skills from GCHQ Manchester's staff.",
            link: null, 
            image: null,
        },

        a2:
        {
            title: "STEM Residential",
            date: "June 2023",
            body: "Sunderland University Computer Science and Robotics STEM Residential creating and programming Mini-Mars Rovers.",
            link: null, 
            image: "/42a3ce0a7.jpg",
        },

        a1:
        {
            title: "Barclays STEM Stars Events",
            date: "February 2024",
            body: "Learning cybersecurity, IT, team working and project management skills at their Radbroke Hall Technology Site.",
            link: null, 
            image: null,
        },

        a0:
        {
            title: "Achieved Bronze DofE",
            date: null,
            body: "Duke Of Edinburgh Award, with weekly volunteering sessions teaching IT skills at a local primary school.",
            link: null, 
            image: "/05a7a5r56.jpg",
        },

    }   
    return featuredActivities;
}


export async function Certification() {
    const certifications = {

        a2:
        {   
            title: "St John Ambulance, First Aid Training",
            date: "November 2025",
            body: "In-person instructed course by SJA.",
            link: null,
            image: null,
        },

        a1:
        {   
            title: "St John Ambulance, Mental Wellbeing Training",
            date: "November 2025",
            body: "In-person instructed course by SJA.",
            link: null,
            image: "4a6c8eb8c.png",
        },

        a0:
        {   
            title: "Practical Github Actions",
            date: "October 2025",
            body: "LinkedIn Learning Certification.",
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
            body: "Description of App...",
            link: "https://github.com/t1ger112/portfolioSite",
            image: null,
        },

        a2:
        {
            title: "AirSpace Invaders",
            date: "April 2025",
            body: "Description of App...",
            link: "https://github.com/t1ger112/airspace_invaders",
            image: null,
        },

        a1:
        {
            title: "CHEEZ Regiment Website",
            date: "December 2024 - Current",
            body: "Description of App...",
            link: "https://github.com/t1ger112/cheezWebLIVE",
            image: null,
        },

        a0:
        {
           title: "RAF Flight-Data App",
            date: "December 2023",
            body: "Description of App...",
            link: "https://github.com/t1ger112/RAF-Flight-Data-App",
            image: null,
        },

    }   
    return apps;
}



