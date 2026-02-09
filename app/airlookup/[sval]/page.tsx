
import qryWorker from "@/app/actions/sqlWorker";

export default async function LookupSval({
    params
}: {
    params: Promise<{ sval: string }>;
}) {
    const lookupIdent = (await params).sval;
    let result : any = null;
    try {
        result = await qryWorker(lookupIdent);
    } catch (error) {
        throw new Error("Bad query input, unable to retrieve data:");
    }

    let titleName: String = "AirLookup - Results";
    if (result && result.resIdent) {
        titleName = "AirLookup - " + result.resIdent.values[0][2];
    } else {
        throw new Error("Bad query input, unable to retrieve data:");
    }

    let showVal1 = "", showVal2 = "", showVal3 = "";
    if (result.sRunways === false) showVal1 = "No Runways Found";
    if (result.sFreqs === false) showVal2 = "No Frequencies Found";
    if (result.sNavaids === false) showVal3 = "No Navaids Found";

    return (

        <div className="flex w-full h-full overflow-hidden pt-[5rem] pb-[2.5rem] justify-center">

            <div className="flex w-[85.5%] max-w-[73.75rem] justify-center items-center flex-col gap-5 overflow-hidden">
                <title>{titleName}</title>

                <div className="flex justify-between items-center w-full">
                    <a className="bebas text-[1.5rem] pl-0.5 opacity-90">AIRLOOKUP RESULTS:</a>
                    <a className="bebas text-red-300 text-[1.5rem] duration-250 hover:opacity-60 pr-0.5" href="/airlookup">BACK TO SEARCH</a>
                </div>

                <div className="flex flex-row pl-5 p-3 text-4xl bebas widoride overflow-auto">
                    <a className="flex p-2 text-blue-300">{result.resIdent.values[0][0]}</a>
                    <a className="flex p-2 whitespace-nowrap">{result.resIdent.values[0][2]}</a>
                    <a className="flex p-2">{result.resIdent.values[0][1]}</a>
                </div>


                <div className="flex flex-row wrap widoride overflow-auto">
                    <div className="flex flex-col p-5">
                        <h2 className="text-4xl text-blue-300 bebas p-2">Information</h2>
                        <div className="grid info-grid gap-1 p-2 text-[1.2rem]">
                            <a className="flex g1 bebas ">Type:</a>      <a className="flex g2 justify-center items-center">{result.resIdent.values[0][3]}</a>
                            <a className="flex g1 bebas ">ICAO:</a>      <a className="flex g2 justify-center items-center">{result.resIdent.values[0][4]}</a>
                            <a className="flex g1 bebas ">IATA:</a>      <a className="flex g2 justify-center items-center">{result.resIdent.values[0][5]}</a>
                            <a className="flex g1 bebas ">GPS:</a>       <a className="flex g2 justify-center items-center">{result.resIdent.values[0][6]}</a>
                            <a className="flex g1 bebas ">LOCAL:</a>     <a className="flex g2 justify-center items-center">{result.resIdent.values[0][7]}</a>
                            <a className="flex g1 bebas ">Area:</a>      <a className="flex g2 justify-center items-center">{result.resIdent.values[0][1]}</a>
                            <a className="flex g1 bebas ">Country:</a>   <a className="flex g2 justify-center items-center">{result.resIdent.values[0][8]}</a>
                            <a className="flex g1 bebas ">Region:</a>    <a className="flex g2 justify-center items-center">{result.resIdent.values[0][9]}</a>
                            <a className="flex g1 bebas ">Elevation:</a> <a className="flex g2 justify-center items-center">{result.resIdent.values[0][10]}ft</a>
                            <a className="flex g1 bebas ">Lat:</a>       <a className="flex g2 justify-center items-center">{result.resIdent.values[0][11]}deg</a>
                            <a className="flex g1 bebas ">Long:</a>      <a className="flex g2 justify-center items-center">{result.resIdent.values[0][12]}deg</a>
                        </div>
                    </div>

                    <div className="flex flex-col p-5 whitespace-nowrap">
                        <h2 className="text-4xl text-blue-300 p-2 bebas">Frequencies</h2>
                        <div className="flex flex-col text-[1.2rem]">
                            <div className="grid freqs-grid">
                                <a className="flex g1 p-2 bebas">Type:</a>
                                <a className="flex g2 p-2 pl-3 bebas">Frequency:</a>
                                <a className="flex g3 p-2 pl-3 bebas">Desc:</a>
                            </div>
                            <div>
                                <div id="freqData" className={result.sFreqs === true ? 'flex flex-col' : 'hidden'}>
                                    {result.resFreqs.values.map((val: any, index: any) => (
                                        <div key={index} className="grid freqs-grid">
                                            <a className="flex pl-2 g1 items-center">{val[1]}</a>
                                            <a className="flex p-2 pl-2.5 g2 items-center">{val[3]}mhz</a>
                                            <a className="flex p-2 pl-3 g3 items-center">{val[2]}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <a id="noFreqData" className="text-3xl text-red-300 bebas pl-2">{showVal2}</a>
                    </div>
                </div>



                <div className="flex flex-col p-5 widoride  whitespace-nowrap">
                    <h2 className="text-4xl text-blue-300 bebas p-2">Runways</h2>

                    <div id="rnyData" className={result.sRunways === true ? 'flex flex-col gap-5 p-2 overflow-hidden text-[1.2rem]' : 'hidden'}>
                        {result.resRunways.values.map((val: any, index: any) => (
                            <div key={index} className="flex flex-col bg-gray-500/20 rounded-lg p-2 gap-1 overflow-auto">
                                <div className="flex flex-row">
                                    <a className="flex p-2">Length: {val[3]}ft</a>
                                    <a className="flex p-2">Width: {val[4]}ft</a>
                                    <a className="flex p-2">Surface: {val[0]}</a>
                                    <a className="flex p-2">Lighted: {val[1]}</a>
                                    <a className="flex p-2">Closed: {val[2]}</a>
                                </div>
                                <div className="grid runway-grid gap-y-1">
                                    <a className="flex p-2 row-1 col-1">RNY: {val[5]}</a>
                                    <div className="grid runway-min-grid row-1 col-3">
                                        <a className="flex p-1 row-1 col-1">Lat: {val[6]}deg</a>
                                        <a className="flex p-1 row-2 col-1">Long: {val[7]}deg</a>
                                        <a className="flex p-1 row-1 col-2">Elevation: {val[8]}ft</a>
                                        <a className="flex p-1 row-2 col-2">Heading: {val[9]}degT</a>
                                    </div>
                                    <a className="flex p-2 row-1 col-5">Threshold: {val[10]}ft</a>

                                    <a className="flex p-2 row-2 col-5">RNY: {val[11]}</a>
                                    <div className="grid runway-min-grid row-2 col-3">
                                        <a className="flex p-1 row-1 col-2">Lat: {val[12]}deg</a>
                                        <a className="flex p-1 row-2 col-2">Long: {val[13]}deg</a>
                                        <a className="flex p-1 row-1 col-1">Elevation: {val[14]}ft</a>
                                        <a className="flex p-1 row-2 col-1">Heading: {val[15]}degT</a>
                                    </div>
                                    <a className="flex p-2 row-2 col-1">Threshold: {val[16]}ft</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <a id="noRnyData" className="text-3xl text-red-300 bebas pl-2">{showVal1}</a>
                </div>



                <div className="flex flex-col p-5 widoride overflow-hidden">
                    <h2 className="text-4xl text-blue-300 bebas p-2">Navaids</h2>

                    <div id="navData" className={result.sNavaids === true ? 'flex p-1 gap-5 text-[1.2rem]' : 'hidden'}>
                        {result.resNavaids.values.map((val: any, index: any) => (
                            <div key={index} className="flex flex-row flex-wrap bg-gray-500/20 rounded-lg p-2 gap-1 overflow-auto">
                                <a className="flex p-1">Name: {val[11]}</a>
                                <a className="flex p-1">Ident: {val[12]}</a>
                                <a className="flex p-1">Type: {val[1]} </a>
                                <a className="flex p-1">Latitude: {val[2]} deg</a>
                                <a className="flex p-1">Longitude: {val[3]} deg</a>
                                <a className="flex p-1">Elevation: {val[4]} ft</a>
                                <a className="flex p-1">DME Frequency: {val[5]} khz</a>
                                <a className="flex p-1">DME Channel: {val[6]} </a>
                                <a className="flex p-1">Slaved Variation: {val[7]} deg</a>
                                <a className="flex p-1">Magnetic Variation: {val[8]} deg</a>
                                <a className="flex p-1">Power: {val[10]}</a>
                            </div>
                        ))}
                    </div>
                    <a id="noNavData" className="text-3xl text-red-300 bebas pl-2">{showVal3}</a>
                </div>



                <div className="flex flex-col p-5 widoride overflow-hidden">
                    <h2 className="text-4xl text-blue-300 bebas p-2">Alerts</h2>
                    <a className="text-3xl text-red-300 bebas pl-2">NO ALERTS AVAILABLE</a>
                </div>



                <div className="flex flex-col p-5 widoride overflow-hidden">
                    <h2 className="text-4xl text-blue-300 bebas p-2">Contacts</h2>
                    <div className="contacts-grid gap-1 mt-1 text-[1.175rem] overflow-auto"> 
                        <a className="flex pl-2 w-fit bebas g1">Website:</a> <a className="flex pl-2 g2 hover:opacity-75 hover:text-blue-300 duration-200" href={result.resContacts.values[0][0]?.toString()} target="_default">{result.resContacts.values[0][0]}</a>
                        <a className="flex pl-2 w-fit bebas g1">Wikipedia:</a> <a className="flex pl-2 g2 hover:opacity-75 hover:text-blue-300 duration-200" href={result.resContacts.values[0][1]?.toString()} target="_default">{result.resContacts.values[0][1]}</a>
                        <a className="flex pl-2 w-fit bebas g1">Nicknames:</a> <a className="flex pl-2 g2">{result.resContacts.values[0][2]}</a>
                    </div>
                </div>


                <div className="flex w-full justify-center items-center overflow-hidden">
                    <h2 className="text-[1.5rem] text-blue-300 bebas p-2"> Lookup data may be inaccurate - Source data available at <a className="duration-250 hover:opacity-70" href="https://ourairports.com">OurAirports.com</a></h2>
                </div>

            </div>

        </div>

    );
}