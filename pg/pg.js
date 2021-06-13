const { Pool } = require('pg')

const pool = new Pool({
    host: 'ec2-3-218-71-191.compute-1.amazonaws.com',
    database: 'd29uf3s5qjb5c6',
    user: 'krwdziinidqysw',
    password: '767130f43e85199e4e949deb8f231cb3c8c8438514120a18bd9a17d91a009163',
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