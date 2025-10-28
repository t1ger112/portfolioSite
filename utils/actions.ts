
'use server'

export default async function Action() {
    console.log("err: bad action call");
}

export async function Copy(link : string){
    const copyVal = "https://" + window.location.host + "#" + link;
    navigator.clipboard.writeText(copyVal);
}

export async function Red(linker: string) {
    window.location.href = "/" + linker;
    console.log('ERR: REDIRECT FAILED');
}

export async function Activity() {
    const activities = {

        a2:
        {
            type: "section-entry-pic prefaceOrideStatic",
            title: "Activity Title 3",
            date: "September 2024 - Current",
            body: "Description of Activity arg1... kjfawkjbfakjawbf kabwfkawbfkbawk vhjebwhbweb jvh wjehfbhwebbewkfbw vjhwefbwebfk kjfawkjbfawkbf akjwfnkjawbfkawbfkba afkbwakfbawkjbf kawjbfkjawbfkjawbf kabwfkawbfkbawk vhjebwhbweb jvh wjehfbhwebbewkfbw vjhwefbwebfk",
            link: "./activity/#a0",
            image: "/i1.jpg",
        },
        
        a6:
        {
            type: "section-entry prefaceOrideStatic",
            title: "Activity Title 2",
            date: "September 2024 - Current",
            body: "Description of Activity arg1... kbqwkfbqiwfbiq vj qiwfbkqwbfiqb ibqwfkbqwifbqiwbf",
            link: "/activity/#a0",
            image: "/i1.jpg"
        },

         a62:
        {
            type: "section-entry prefaceOrideStatic",
            title: "Activity Title 1",
            date: "September 2024 - Current",
            body: "Description of Activity arg1...",
            link: "/activity/#a0",
        },

    }   
    return activities;
}


export async function Certification() {
    const certifications = {

        a0:
        {   
            type: "section-entry-cert prefaceOrideStatic",
            title: "Certification Title 1",
            date: "September 2024 - Current",
            body: "Description of Cert...",
            image: "/public/file.svg"
        },

    }   
    return certifications;
}


export async function App() {
    const apps = {

        a0:
        {
            type: "section-entry-cert prefaceOrideStatic",
            title: "App Title 1",
            date: "September 2024 - Current",
            body: "Description of App...",
            image: "temp"
        },

    }   
    return apps;
}



