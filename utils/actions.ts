
'use server'

export default async function Action() {
    console.log("err: bad action call");
}

export async function Copy(link : string){
    const copyVal = "https://" + window.location.host + "#" + link;
    navigator.clipboard.writeText(copyVal);
}

export async function Activity() {

    const activities = {

        a0:
        {
            title: "Activity Title 1",
            date: "September 2024 - Current",
            body: "Description of Activity arg1...",
            image: "bob"
        },

        a1: 
        {
            title: "Activity Title 2",
            date: "September 2024 - Current",
            body: "Description of Activity arg2..."
        },

        a2:
        {
            title: "Activity Title 3",
            date: "September 2024 - Current",
            body: "Description of Activity arg1...",
            image: "bob"
        },

        a3:
        {
            title: "Activity Title 4",
            date: "September 2024 - Current",
            body: "Description of Activity arg1...",
            image: "bob"
        },

        a4:
        {
            title: "Activity Title 5",
            date: "September 2024 - Current",
            body: "Description of Activity arg1...",
            image: "bob"
        },
    }   

    return activities;
}

// export function Certification(this: any, title: any, date: any, body: any) {
//   this.title = title;
//   this.date = date;
//   this.body = body;
// }

// export function App(this: any, title: any, date: any, body: any) {
//   this.title = title;
//   this.date = date;
//   this.body = body;
// }

