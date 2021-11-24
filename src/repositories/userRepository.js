import connection from "../database.js";

async function createUser ({ name, email, password}) {  
    const result = await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, password]
      );

      return result;
  
}

async function selectUser ({ email }) {  
    const result = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );

    return result.rows[0];
}

export {
    createUser,
    selectUser,
}