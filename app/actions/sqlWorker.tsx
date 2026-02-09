"use server";

import initSqlJs from "sql.js";
import fs from "fs/promises";

export default async function qryWorker(ident: string) {

    try {
        const rawInput = ident.trim();
        if (!/^[a-z0-9 \-]{1,9}$/i.test(rawInput)) {
            return { resultOut: null };

        } else {
            const SQL = await initSqlJs({locateFile: (file: string) => `./${file}`});// Init sql.js and db
            const buf = await fs.readFile("./db1_X.sqlite");
            const db = new SQL.Database(new Uint8Array(buf));

            let sIdent = true; 
            let sRunways = true;
            let sFreqs = true;
            let sNavaids = true;
            let sContacts = true;
            let sAlerts = true;

            // Run Individual Queries:

            const qryIdent = identQry(rawInput);
            const resultIdent = db.exec((await qryIdent).resp)[0];
            if (resultIdent === undefined) {
                db.close();
                return { resultOut: null };
            }

            const qryRunways = runwaysQry(rawInput);
            let resultRunways = db.exec((await qryRunways).resp)[0];
            if (resultRunways === undefined) {
                resultRunways = resultIdent;
                sRunways = false;
            }

            const qryFreqs = freqsQry(rawInput);
            let resultFreqs = db.exec((await qryFreqs).resp)[0];
            if (resultFreqs === undefined) {
                resultFreqs = resultIdent;
                sFreqs = false;
            }

            const qryNavaids = navaidsQry(rawInput);
            let resultNavaids = db.exec((await qryNavaids).resp)[0];
            if (resultNavaids === undefined) {
                resultNavaids = resultIdent;
                sNavaids = false;
            }

            const qryContacts = contactsQry(rawInput);
            let resultContacts = db.exec((await qryContacts).resp)[0];
            if (resultContacts === undefined) {
                resultContacts = resultIdent;
                sContacts = false;
            }

            const qryAlerts = alertsQry(rawInput);
            let resultAlerts = db.exec((await qryAlerts).resp)[0];
            if (resultAlerts === undefined) {
                resultAlerts = resultIdent;
                sAlerts = false;
            }

            db.close();
            return { resIdent: resultIdent, resRunways: resultRunways, resFreqs: resultFreqs, resNavaids: resultNavaids, resContacts: resultContacts, resAlerts: resultAlerts, sIdent, sRunways, sFreqs, sNavaids, sContacts, sAlerts };
        }
    } catch (error) {
        return { resultOut: null };
    }
}

export async function identQry(lookIdent: String) {
    const qryWorker = "SELECT ident, continent, name, type, icao_code, iata_code, gps_code, local_code, iso_country, iso_region, elevation_ft, latitude_deg, longitude_deg FROM Airports WHERE ident ='" + lookIdent.toUpperCase() + "';";
    return { resp: qryWorker };
}

export async function runwaysQry(lookIdent: String) {
    const qryWorker = "SELECT surface, lighted, closed, length_ft, width_ft, le_ident, le_latitude_deg, le_longitude_deg, le_elevation_ft, le_heading_degT, le_displaced_threshold_ft, he_ident, he_latitude_deg, he_longitude_deg, he_elevation_ft, he_heading_degT, he_displaced_threshold_ft FROM Runways WHERE airport_ident ='" + lookIdent.toUpperCase() + "';";
    return { resp: qryWorker };
}

export async function freqsQry(lookIdent: String) {
    const qryWorker = "SELECT airport_ident, type, description, frequency_mhz FROM AirportFrequencies WHERE airport_ident ='" + lookIdent.toUpperCase() + "';";
    return { resp: qryWorker };
}

export async function navaidsQry(lookIdent: String) {
    const qryWorker = "SELECT name, type, latitude_deg, longitude_deg, elevation_ft, dme_frequency_khz, dme_channel, slaved_variation_deg, magnetic_variation_deg, usageType, power, filename, ident FROM Navaids WHERE associated_airport ='" + lookIdent.toUpperCase() + "';";
    return { resp: qryWorker };
}

export async function contactsQry(lookIdent: String) {
    const qryWorker = "SELECT home_link, wikipedia_link, keywords FROM Airports WHERE ident ='" + lookIdent.toUpperCase() + "';";
    return { resp: qryWorker };
}

export async function alertsQry(lookIdent: String) {
    const qryWorker = "SELECT ident, name, elevation_ft FROM Airports WHERE ident ='" + lookIdent.toUpperCase() + "'";
    return { resp: qryWorker };
}








