'use strict';

var mongoose = require('mongoose');

var Shceme = mongoose.Schema;

var NoteShema = new Shceme({
    title: { type: String },
    text: { type: String, required: true },
    color: { type: String },
    createdAt: { type: Date }
});

var Note = mongoose.model('Note', NoteShema);