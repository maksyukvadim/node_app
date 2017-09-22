const mongoose = require('mongoose');

const Shceme = mongoose.Schema;

const NoteShema = new Shceme({
    title: { type: String },
    text: { type: String, required: true },
    color: { type: String },
    createdAt: { type: Date }
});

const Note = mongoose.model('Note', NoteShema);