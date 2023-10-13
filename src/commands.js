import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import {
  resetNotes,
  addNewNote,
  removeNote,
  getNotes,
  findNotes,
  updateNote,
} from "./notes.js";

yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "Add a new note",
    (yargs) => {
      // Wtf is this for?
      return yargs.positional("note", {
        describe: "The content of the note you want to create",
        type: "string",
      });
    },
    async (argv) => {
      const newNote = await addNewNote(argv.note);

      console.log("New note created: ", newNote);
    }
  )
  .command(
    "remove <noteId>",
    "Remove a note",
    () => {},
    async (argv) => {
      const removedNote = await removeNote(argv.noteId);

      console.log("Removed note: ", removedNote);
    }
  )
  .command(
    "list",
    "List all notes",
    () => {},
    async () => {
      const notes = await getNotes();

      for (const note of notes) {
        console.log(note);
      }
    }
  )
  .command(
    "find <search>",
    "Find notes",
    () => {},
    async (argv) => {
      const notes = await findNotes(argv.search);

      if (notes.length === 0) {
        console.log("No notes found!");
        return;
      }

      for (const note of notes) {
        console.log(note);
      }
    }
  )
  .command(
    "update <noteId> <note>",
    "Update a note",
    () => {},
    async (argv) => {
      const newNote = await updateNote(argv.noteId, argv.note);
      console.log("Updated note: ", newNote);
    }
  )
  .command(
    "reset",
    "Reset the database",
    () => {},
    async () => {
      await resetNotes();
      console.log("Database has been reset!");
    }
  )
  .demandCommand(1)
  .parse();
