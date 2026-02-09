declare module "sql.js" {
  export interface QueryExecResult {
    columns: string[];
    values: Array<Array<string | number | null>>;
  }

  export interface Statement {
    bind(values?: Array<string | number | null> | Record<string, string | number | null>): void;
    step(): boolean;
    get(): Array<string | number | null>;
    getAsObject(): Record<string, string | number | null>;
    getColumnNames(): string[];
    free(): void;
  }

  export interface Database {
    exec(sql: string): QueryExecResult[];
    prepare(sql: string): Statement;
    close(): void;
  }

  export interface SqlJsStatic {
    Database: new (data?: Uint8Array) => Database;
  }

  export interface SqlJsConfig {
    locateFile?: (file: string) => string;
  }

  export default function initSqlJs(config?: SqlJsConfig): Promise<SqlJsStatic>;
}
