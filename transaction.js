class Transaction {
    constructor(wrappers) {
        this.wrappers = wrappers // {initialize, close}
    }

    perform(anyMethod) {
        this.wrapper.forEach(wrapper => wrapper.initialize())
        anyMethod.call()
        this.wrapper.forEach(wrapper => wrapper.close())
    }
}

let transaction = new Transaction([{
    initialize() {
        console.log('initialize')
    },
    close() {
        console.log('close')
    }
}])
function setState() {
    console.log('setState')
}
transaction.perform(setState);