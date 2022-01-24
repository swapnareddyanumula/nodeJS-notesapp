const chalk = require('chalk')
const validator = require('validator')
const yargs = require('yargs')

const notes = require('./notes.js')

//console.log(validator.isEmail('swapna@example.com'))
//console.log(validator.isURL('https://www.google.com/'))

//console.log(chalk.green('Success'))
//console.log(chalk.green.bold('Success'))
//console.log(chalk.bold.green.inverse('Success'))

//console.log(process.argv)

//yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addnote(argv.title, argv.body)
    }

    /*handler: function(argv){
        notes.addnote(argv.title, argv.body)
    }*/

})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
    notes.removenote(argv.title)
    }

    /*handler: function(argv){
        notes.removenote(argv.title)
    }*/
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readnote(argv.title)
    }

    /*handler: function(){
        console.log('Reading a note!')
    }*/
})

yargs.command({
    command: 'list',
    describe: 'List notes',
    handler(){
        notes.listnotes()
    }

    /*handler: function(){
        console.log('Listing notes!')
    }*/
})

yargs.parse()

//console.log(yargs.argv)