#!/usr/bin/env node

// console.log("ARGV: ", ...process.argv);
// console.log("ENVS: ", process.env);

const note = process.argv[2];
const newNote = {
  id: Date.now(),
  note,
};
console.log("Created new note: ", newNote);
