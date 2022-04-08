import knex from 'knex';


const connection = knex({ // Estabelece conexão com o banco
client: "mysql",
connection: {
host: "35.226.146.116",
port: 3306,
user: "21712863-jardel-nepomuceno",
password: "TcE1Rq~mvlgw#SqzvkV7",
database: "vaughan-21712863-jardel-nepomuceno",
multipleStatements: true
}
})
export default connection