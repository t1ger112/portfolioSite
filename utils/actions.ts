
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

export async function Activity() {
    const activities = {

         a62:
        {
            title: "Activity Title 1",
            date: "September 2024 - Current",
            body: "Description of Activity arg1.a..",
            link: "/activity/#a0", 
            image: null
        },

        a6252: 
        {
            title: "Activity Title 1",
            date: "September 2024 - Current",
            body: "Description of Activity arg1..a.",
            link: "/activity/#a0", 
            image: "/i1.jpg",
        },

    }   
    return activities;
}

export async function FeaturedActivity() {
    const featuredActivities = {

         a62:
        {
            title: "FActivity Title 1",
            date: "September 2024 - Current",
            body: "Description of FActivity arg1.a..",
            link: "/activity/#a0", 
            image: null,
        },

    }   
    return featuredActivities;
}


export async function Certification() {
    const certifications = {

        a0:
        {   
            title: "Certification Title 1b",
            date: "September 2024 - Current",
            body: "Description of Cert...",
            link: "/activity/#a0",
            image: null,
        },

    }   
    return certifications;
}


export async function App() {
    const apps = {

        a0:
        {
            title: "App Title 1a",
            date: "September 2024 - Current",
            body: "Description of App...",
            link: "/activity/#a0",
            image: null,
        },

    }   
    return apps;
}



