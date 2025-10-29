
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
            title: "Activity Title 4",
            date: "September 2024 - Current",
            body: "Description of Activity...",
            link: "/activity/#a0", 
            image: "/i2.jpg",
        },

        a2: 
        {
            title: "Activity Title 3",
            date: "September 2024 - Current",
            body: "Description of Activity...",
            link: "/activity/#a0", 
            image: null,
        },

        a1:
        {
            title: "Activity Title 2",
            date: "September 2024 - Current",
            body: "Description of Activity...",
            link: "/activity/#a0", 
            image: "/i2.jpg",
        },

        a0: 
        {
            title: "Activity Title 1",
            date: "September 2024 - Current",
            body: "Description of Activity...",
            link: "/activity/#a0", 
            image: "/i1.jpg",
        },

    }   
    return activities;
}

export async function FeaturedActivity() {
    const featuredActivities = {

        a3:
        {
            title: "FActivity Title 4",
            date: "September 2024 - Current",
            body: "Description of FActivity...",
            link: "/activity/#a0", 
            image: null,
        },

        a2:
        {
            title: "FActivity Title 3",
            date: "September 2024 - Current",
            body: "Description of FActivity...",
            link: "/activity/#a0", 
            image: null,
        },

        a1:
        {
            title: "FActivity Title 2",
            date: "September 2024 - Current",
            body: "Description of FActivity...",
            link: "/activity/#a0", 
            image: "/i2.jpg",
        },

        a0:
        {
            title: "FActivity Title 1",
            date: "September 2024 - Current",
            body: "Description of FActivity...",
            link: "/activity/#a0", 
            image: null,
        },

    }   
    return featuredActivities;
}


export async function Certification() {
    const certifications = {

        a3:
        {   
            title: "Certification Title 4",
            date: "September 2024 - Current",
            body: "Description of Cert...",
            link: "/activity/#a0",
            image: null,
        },

        a2:
        {   
            title: "Certification Title 3",
            date: "September 2024 - Current",
            body: "Description of Cert...",
            link: "/activity/#a0",
            image: "/i2.jpg",
        },

        a1:
        {   
            title: "Certification Title 2",
            date: "September 2024 - Current",
            body: "Description of Cert...",
            link: "/activity/#a0",
            image: null,
        },

        a0:
        {   
            title: "Certification Title 1",
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

        a3:
        {
            title: "App Title 4",
            date: "September 2024 - Current",
            body: "Description of App...",
            link: "/activity/#a0",
            image: "/i2.jpg",
        },

        a2:
        {
            title: "App Title 3",
            date: "September 2024 - Current",
            body: "Description of App...",
            link: "/activity/#a0",
            image: null,
        },

        a1:
        {
            title: "App Title 2",
            date: "September 2024 - Current",
            body: "Description of App...",
            link: "/activity/#a0",
            image: null,
        },

        a0:
        {
            title: "App Title 1",
            date: "September 2024 - Current",
            body: "Description of App...",
            link: "/activity/#a0",
            image: null,
        },

    }   
    return apps;
}



