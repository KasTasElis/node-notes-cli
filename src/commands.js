import yargs from "yargs";
import { hideBin } from "yargs/helpers";

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
    (argv) => {
      console.log("Adding a new note: ", argv.note);
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
    () => {
      console.log("Resetting the DB!");
    }
  )
  .parse();
