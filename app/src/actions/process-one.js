console.log('Process One List of Transactions')

const transactionListText = JSON.stringify(process.env.npm_config_transactionlist)
const transactionList = JSON.parse(
    JSON.parse(transactionListText)
)

console.log(transactionList, transactionList[0])
process.exit()