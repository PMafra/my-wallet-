import connection from "../database.js";

async function createFinancial ({ userId, value, type}) {  
    await connection.query(
        `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
        [userId, value, type]
      );
}

export {
    createFinancial,
}