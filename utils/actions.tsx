
'use server'

export default async function Action() {
    console.log("err: bad action call");
}

export async function Copy(link : string){
    const copyVal = "https://" + window.location.host + "#" + link;
    navigator.clipboard.writeText(copyVal);
}