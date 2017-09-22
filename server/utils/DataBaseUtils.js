const mongoose = require('mongoose');

require('../models/Note');

const Note = mongoose.model('Note');

export function setUpConnection()  {
    mongoose.connect(`mongodb://localhost/notes`);
}

export function listNotes() {
    return Note.find();
}

export function createNote(data) {
    const { title, text, color } = data;
    const note = new Note({
        title: title,
        text: text,
        color: color,
        createAt: new Date()
    });

    return Note.save();
}

export function deleteNote(id) {
    return Note.findById(id).remove();
}