import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { resetNotes, addNewNote } from "./notes.js";

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
    "delete <noteId>",
    "Delete a note",
    () => {},
    (argv) => {
      console.log("Deleting note with id: ", argv.noteId);
    }
  )
  .command(
    "list",
    "List all notes",
    () => {},
    () => {
      console.log("Listing all notes");
    }
  )
  .command(
    "find <search>",
    "Find a note",
    () => {},
    (argv) => {
      console.log("Reading note with id: ", argv.noteId);
    }
  )
  .command(
    "update <noteId> <note>",
    "Update a note",
    () => {},
    (argv) => {
      console.log("Updating note with id: ", argv.noteId);
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
