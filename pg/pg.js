const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    database: 'contacts',
    user: 'postgres',
    password: '6665',
    port: 5432
})

const pg = async (SQL, ...params) => {
    const client = await pool.connect()

    try {
        const { rows }  = await pool.query(SQL, params)
        return rows

    } finally {
        client.release()
    }
}

module.exports.pg = pg