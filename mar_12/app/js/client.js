'use strict';

var React = require('react');
var Fluxxor = require('fluxxor');
var actions = require('./dispatcher.js');
var NoteStore = require('./stores/note_store');
var NotesApp = require('./components/note/notes_app');

var stores = {
  NoteStore: new NoteStore()
};

var flux = new Fluxxor.Flux(stores, actions);

React.render(<NotesApp flux={flux}/>, document.body);
