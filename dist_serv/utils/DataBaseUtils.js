'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setUpConnection = setUpConnection;
exports.listNotes = listNotes;
exports.createNote = createNote;
exports.deleteNote = deleteNote;
var mongoose = require('mongoose');

require('../models/Note');

var Note = mongoose.model('Note');

function setUpConnection() {
    mongoose.connect('mongodb://localhost/notes');
}

function listNotes() {
    return Note.find();
}

function createNote(data) {
    var title = data.title,
        text = data.text,
        color = data.color;

    var note = new Note({
        title: title,
        text: text,
        color: color,
        createAt: new Date()
    });

    return Note.save();
}

function deleteNote(id) {
    return Note.findById(id).remove();
}