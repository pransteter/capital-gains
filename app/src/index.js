const { getTaxes } = require('./domain/getTaxes')

const printInitialText = () => console.log('\nInsert the transactions list (json in a sigle line): \n')

printInitialText()
console.log()
process.stdin.on("data", data => {
    const input = data.toString().trim()
    if (input === '') {
        console.log('bye.')
        process.exit(0)
        return
    }

    const taxes = getTaxes(JSON.parse(input))
    console.log()
    process.stdout.write(JSON.stringify(taxes) + '\n')
    console.log('Beautified response:', taxes)
    
    printInitialText()
})
