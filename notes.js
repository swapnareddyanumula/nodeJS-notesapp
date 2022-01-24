const fs = require('fs')
const chalk = require('chalk')

const getnotes = () => {
    return 'your notes....'
}
//module.exports = getnotes

const addnote = (title, body) => {
    const notes = loadnotes()
    const duplicatenote = notes.find((note) => note.title === title)

    //const duplicatenotes = notes.filter((note) => note.title === title)

    if(!duplicatenote)              //if(duplicatenotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        savenotes(notes)
        console.log(chalk.green.inverse("New Note added!"))
    }
    else{
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const removenote = (title) => {
    const notes = loadnotes()
    const notestokeep = notes.filter((note) => note.title !== title)

    if(notes.length>notestokeep.length)
    {
        console.log(chalk.green.inverse('Note Removed!'))
        savenotes(notestokeep)
    }else{
        console.log(chalk.red.inverse('No Note found'))
    }
}

const listnotes = () => {
    const notes = loadnotes()
    console.log(chalk.inverse('Your notes'))

    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readnote = (title) => {
    const notes = loadnotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const savenotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadnotes = () => {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    getnotes: getnotes,
    addnote: addnote,
    removenote: removenote,
    listnotes: listnotes,
    readnote: readnote
}