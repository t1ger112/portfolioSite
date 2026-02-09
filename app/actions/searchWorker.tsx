"use server";

import initSqlJs from "sql.js";
import fs from "fs/promises";
import path from "path";

export default async function execLookup(searchTerm: string) {

    try {
        const rawInput = searchTerm.trim();
        if (!/^[a-z0-9 \-]{1,25}$/i.test(rawInput)) {
            return { resultOut: null };
            
        } else {
            const SQL = await initSqlJs({
                locateFile: (file: string) =>
                    path.join(process.cwd(), "node_modules", "sql.js", "dist", file)
            });
            const dbPath = path.join(process.cwd(), "public", "db1_X.sqlite");
            const buf = await fs.readFile(dbPath);
            const db = new SQL.Database(new Uint8Array(buf));

            const escapeLike = (value: string) => value.replace(/[%_\\]/g, "\\$&");
            const likeValue = `%${escapeLike(rawInput)}%`;
            const identValue = rawInput.toUpperCase();

            const stmt = db.prepare(
                "SELECT ident, name, type, iso_region, continent " +
                "FROM Airports " +
                "WHERE ident = :ident " +
                "OR name LIKE :like ESCAPE '\\' " +
                "OR keywords LIKE :like ESCAPE '\\' " +
                "OR icao_code LIKE :like ESCAPE '\\' " +
                "OR iata_code LIKE :like ESCAPE '\\' " +
                "OR gps_code LIKE :like ESCAPE '\\' " +
                "OR local_code LIKE :like ESCAPE '\\' " +
                "LIMIT 9;"
            );

            try {
                stmt.bind({ ":ident": identValue, ":like": likeValue });
                const columns = stmt.getColumnNames();
                const values: Array<Array<string | number | null>> = [];

                while (stmt.step()) {
                    values.push(stmt.get());
                }
                return { resultOut: { columns, values } };

            } finally {
                stmt.free();
                db.close();
            }
        }
    } catch (error) {
        return { resultOut: null };
    }
}

